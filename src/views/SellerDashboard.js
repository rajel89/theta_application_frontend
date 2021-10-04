import {Link} from "react-router-dom";
import Header from "../components/Header"
import SellerDashboardLinks from "./SellerDashboardLinks";
import SellerAvailability from "./SellerAvailability";
import axios from 'axios'
import { environment } from "../environments/environment";
import  { useHistory  } from 'react-router-dom'
import { useState, useEffect } from 'react';

const SellerDashboard = () => {
    const userProfile = JSON.parse(localStorage.getItem('userDetails'));
    const userDetails = userProfile.userDetails;

    const [dashboardDetails, setDashboardDetails] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const ucwords = (str) => {
        return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
            return $1.toUpperCase();
        });
    }

    useEffect(() => {
        axios.get(environment.API_URL + 'seller/dashboard', {headers: {token: userProfile.token}})
        .then(response => {
            if(response.status == 200)
            {
                // console.log(response.data.dashboard)
                setDashboardDetails(response.data.dashboard)
                return(() => {
                    setDashboardDetails({})
                })
            }
        }).catch(err => {
            // setErrorMsg(err.response.data)
            console.log(err)
        });
    }, []);


    return (
        
        <div>
            <Header title='Seller Dashboard'/>
            <section className="seller-dashboard-content mt-3">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="../assets/img/avatar.png" alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>{ucwords(userDetails.name)}</h4>
                                            {dashboardDetails &&
                                                <p className="text-secondary mb-1">{dashboardDetails.profile?.jobSkills}</p>   
                                            }
                                            {dashboardDetails.profile &&
                                                <p className="text-muted font-size-sm">{dashboardDetails.profile?.address}</p>
                                            }
                                            <SellerAvailability/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <SellerDashboardLinks/>
                        </div>
                        <div className="col-8 col-md-8">
                            <section className="text-center">
                                <h1>About Me</h1>
                                {dashboardDetails.profile?.aboutMe &&
                                    <div className="text-start">
                                        <pre>
                                            <p>
                                                {dashboardDetails.profile?.aboutMe}
                                            </p>
                                        </pre>
                                    </div>
                                }
                                
                            </section>
                            <section id="pricing-1" className="py-5">
                                <div className="container py-3">
                                    <div className="row text-center mb-5">
                                        <div className="col-xl-9 mx-auto">
                                            <h2 className="mb-3">Service Package<br/></h2>
                                            <p className="text-muted">He's a very strange young man.<br/></p>
                                        </div>
                                    </div>
                                    {dashboardDetails.servicePackage &&
                                        <section className="row g-4">
                                            {dashboardDetails.servicePackage.map(function(d){
                                                return (
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
                                                                    <Link to={'/seller/service-package/update/' + d._id} className="btn btn-primary d-flex justify-content-between align-items-center w-100">Edit Package <span><i className="fas fa-arrow-right"></i></span></Link>
                                                                </div>
                                                                <p className="text-secondary mb-0"><small>{d.packageName}</small></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })} 
                                        </section>
                                    }
                                    <div className="row">
                                        <div className="col">
                                            <section className="projects-horizontal">
                                                <div className="container-fluid">
                                                    <div className="intro">
                                                        <h2 className="text-center">Most recent completed projects</h2>
                                                    </div>
                                                    {dashboardDetails.completedProjects &&
                                                        <section className="row projects">
                                                            {dashboardDetails.completedProjects.map(function(p){
                                                                return (
                                                                    <div className="col-sm-6 item" key={p._id}>
                                                                        <div className="row">
                                                                            <div className="col-md-12 col-lg-5"><a href="#"><img className="img-fluid" src={environment.ASSET_URL + p.image} /></a></div>
                                                                            <div className="col">
                                                                                <h3 className="name">{p.name}</h3>
                                                                                <p className="description">{p.description}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </section>
                                                    }
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SellerDashboard
