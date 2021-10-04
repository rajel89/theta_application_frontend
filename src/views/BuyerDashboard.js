import Header from "../components/Header"
import BuyerProfile from "./BuyerProfile"
import BuyerDashboardLinks from "./BuyerDashboardLinks"
import { useState, useEffect } from 'react';
import axios from "axios";
import { environment } from "../environments/environment";
import { Link} from "react-router-dom";

import ReactTimeAgo from 'react-time-ago'


const BuyerDashboard = () => { 

    const userProfile = JSON.parse(localStorage.getItem('userDetails'));
    const userDetails = userProfile.userDetails;

    const [dashboardDetails, setDashboardDetails] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSearching, setisSearching] = useState(false);
    const [searchTextLoading, setsearchTextLoading] = useState(false);
    const [searchResult, setSearchResult ] = useState({});
    const [searchInput, setSearchInput] = useState('');

    const ucwords = (str) => {
        return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
            return $1.toUpperCase();
        });
    }

    useEffect(() => {
        axios.get(environment.API_URL + 'buyer/jobs', {headers: {token: userProfile.token}})
        .then(response => {
            if(response.status == 200)
            {
                // console.log(response.data.jobpost)
                setDashboardDetails(response.data)
            }
        }).catch(err => {
            console.log(err.response.data)
        });
        /* return () => {
            setDashboardDetails({})
        } */
    }, [])

    const resetSearch = (e) => {
        e.preventDefault();
        setisSearching(false);
        setSearchInput('');
    }

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter')
        {
            setisSearching(true);
            setsearchTextLoading(true);
            axios.post(environment.API_URL + 'search/services', {search: e.target.value}, {headers: {token: userProfile.token}})
            .then(response => {
                // console.log(response.data)
                setSearchResult(response.data);
                setsearchTextLoading(false);
            }).catch(err => {
                console.log(err.response.data)
            })
        }

        if(e.target.value == "" || e.target.value == null)
        {
            setisSearching(false)
        }
    }

    return (
        <div>
            <Header title='Buyer Dashboard' />
            <section className="buyer-dashboard-content mt-3">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col">
                            <BuyerProfile/>
                            <BuyerDashboardLinks/>
                        </div>
                        <div className="col-8 col-md-8">
                            <section id="searchFreelancer" className="py-5">
                                <div className="container px-0">
                                    <div className="input-group mb-3">
                                        <input onKeyDown={_handleKeyDown} type="text" value={searchInput} onChange={(e) => {setSearchInput(e.target.value)}} className="form-control" placeholder="Search freelancer by job description" />
                                        <span className="input-group-text" id="basic-addon2"><i className="fas fa-search"></i></span>
                                        {isSearching &&
                                            <a href="/#" onClick={resetSearch} className="text-muted search-close-btn"><i className="far fa-times-circle"></i></a>
                                        }
                                    </div>
                                    {isSearching &&
                                        <div className="card">
                                            <div className="card-body">
                                                {searchTextLoading && 
                                                    <p className="text-center">Searching service...</p>
                                                }
                                                {searchResult.services && 
                                                    <section className="row g4">
                                                        {searchResult.services.length === 0 &&
                                                            <p className="text-center">No record found.</p>
                                                        }
                                                        {searchResult.services.map((d) => {
                                                            return(
                                                                <div className="col-md-6 col-xl-4 d-flex" key={d._id}>
                                                                    <div className="card border-primary position-relative">
                                                                        {d.isPopular === true &&
                                                                            <h6 className="text-uppercase text-white bg-primary border-primary position-absolute top-0 end-0 py-1 px-2 fw-normal"><small>Popular</small></h6>
                                                                        }
                                                                        <div className="card-body">
                                                                            <h6 className="card-subtitle mb-1"><small className="text-uppercase text-black-50">{d.packageName}</small></h6>
                                                                            <h5 className="card-title h4 pb-3 border-bottom">{d.packagePrice}</h5>
                                                                            <ul className="list-unstyled pt-3 mb-4">
                                                                                {d.inclusions.map((item, index) => {
                                                                                    if(item !== "")
                                                                                        return(
                                                                                            <li key={item+index} className="d-flex align-items-center mb-2"><span className="text-white d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check bg-primary p-1 me-2 fs-5 rounded-circle">
                                                                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                                                                                                </svg></span><span>{item}</span>
                                                                                            </li>
                                                                                        )
                                                                                    else
                                                                                        return(
                                                                                            <li key={item+index}>&nbsp;</li>
                                                                                        )
                                                                                })}
                                                                            </ul>
                                                                            <div className="mb-2">
                                                                                <Link to={'/buyer/view/freelancers-profile/' + d.userId} className="btn btn-primary d-flex justify-content-between align-items-center w-100">View Profile <span><i className="fas fa-arrow-right"></i></span></Link>
                                                                            </div>
                                                                            <p className="text-secondary mb-0"><small>{d.packageName}</small></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </section>
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                            </section>
                            
                                <h4 className="text-center">Your Job Posting</h4>
                                {dashboardDetails.jobpost &&
                                    <section>
                                        {dashboardDetails.jobpost.map( function(j){
                                           return (<div className="card" key={j._id}>
                                                <div className="card-body">
                                                    <h4 className="card-title">
                                                        <i className="fas fa-thumbtack"></i> {j.title}
                                                        <Link to={'/jobs/'+j._id+'/update'} className="pull-right" title="Edit job post"><i className="far fa-edit"></i></Link>
                                                    </h4>
                                                    <h6 className="text-muted card-subtitle mb-2"><small>Posted <ReactTimeAgo date={new Date(j.createdAt)} locale="en-US"/> </small></h6>
                                                    <pre>
                                                        <p className="card-text">
                                                            {j.description}
                                                        </p>
                                                    </pre>
                                                    <p className="text-muted"><i className="fas fa-hand-holding-usd"></i> Proposal budget: {j.budget}</p>
                                                </div>
                                            </div>)
                                        } )}
                                    </section>
                                }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BuyerDashboard
