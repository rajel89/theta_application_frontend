import Header from "../components/Header"
import BuyerProfile from "./BuyerProfile"
import BuyerDashboardLinks from "./BuyerDashboardLinks"
import BuyerHireModal from "./BuyerHireModal";
import { useState, useEffect } from 'react';
import axios from "axios";
import { environment } from "../environments/environment";
import { Link} from "react-router-dom";
import { useForm } from 'react-hook-form';
import  { useHistory, useParams  } from 'react-router-dom'
import { forwardRef, useRef, useImperativeHandle } from 'react';

const BuyerViewFreelancersProfile = () => {
    const userProfile = JSON.parse(localStorage.getItem('userDetails'));
    const userDetails = userProfile.userDetails;
    const [ loading, setSpinner ] = useState(true);
    const [ errorMsg, setErrorMsg] = useState('');
    const [ successMsg, setSuccessMsg ] = useState('');
    const [freelancersProfile, setFreelancersProfile] = useState({});
    const history = useHistory();
    const params = useParams();
    const modaldRef = useRef();

    const ucwords = (str) => {
        return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
            return $1.toUpperCase();
        });
    }

    const hireService = (data) => {
        modaldRef.current.showModal(data);
    }

    useEffect(() => {
        axios.get(environment.API_URL + `buyer/view/freelancers-profile/${params.id}`, {headers: {token: userProfile.token}})
        .then(response => {
            if(response.status == 200)
            {
                // console.log(response.data)
                setFreelancersProfile(response.data)
                setSpinner(false);
            }
        }).catch(err => {
            console.log(err.response.data)
        });

        return () => {
            setFreelancersProfile({})
        }
    }, [])

    return (
        <div>
            <Header title='Freelancers Profile' />
            <section className="buyer-dashboard-content mt-3">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col">
                            <BuyerProfile/>
                            <BuyerDashboardLinks/>
                        </div>
                        <div className="col-8 col-md-8">
                            <h4 className="text-center">View Freelancers Profile</h4>
                            <hr/>
                            {successMsg !== "" &&
                                <div className="alert alert-success" role="alert">
                                    {successMsg}
                                </div>
                            }
                            {errorMsg !== "" &&
                                <div className="alert alert-danger" role="alert">
                                    {errorMsg}
                                </div>
                            }
                            <div className="row">
                                {loading &&
                                    <div className="text-center">
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <p className="text-center">Load freelancer's profile...</p>
                                    </div>
                                }
                                <div className="col">
                                    {freelancersProfile.profile &&
                                        <div className="card">
                                            <div className="card-body">
                                                {freelancersProfile.profile &&
                                                    <div className="d-flex flex-column align-items-center">
                                                        <img src="../../../assets/img/avatar.png" alt="Admin" className="rounded-circle" width="100" />
                                                        <div className="mt-3">
                                                            <h5 className="text-center">{ucwords(freelancersProfile.profile.name)}</h5>
                                                            <p className="text-secondary font-size-sm mb-1"><small><i className="fas fa-user-tag"></i> {freelancersProfile.profile.profile.jobSkills}</small></p>
                                                            <p className="text-muted font-size-sm mb-1"><small><i className="fas fa-map-marker-alt"></i> {freelancersProfile.profile.profile.address}</small></p>
                                                            {freelancersProfile.profile.isAvailable &&
                                                                <section>
                                                                    <p className="text-center text-muted "><small><i className="fas fa-circle text-success"></i> Available</small></p>
                                                                </section>
                                                                
                                                            }
                                                            
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    }
                                    
                                </div>
                                {freelancersProfile.profile &&
                                <div className="col-8 col-md-8">
                                    <h4><i className="far fa-address-card"></i> About {ucwords(freelancersProfile.profile.name)}</h4>
                                    <pre>
                                        <p>{freelancersProfile.profile.profile.aboutMe}</p>
                                    </pre>
                                </div>   
                                }
                            </div>
                            {freelancersProfile.services &&
                            <div className="row mt-2">
                                <h4 className="text-center"><i className="fas fa-tags"></i> Service Packages</h4>
                                <section className="row g-4">
                                    {freelancersProfile.services.map(function(d){
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
                                                            <button onClick={() => {hireService(d)}} className="btn btn-primary d-flex justify-content-between align-items-center w-100" type="button"> Hire Service <span><i className="fas fa-arrow-right"></i></span></button>
                                                        </div>
                                                        <p className="text-secondary mb-0"><small>{d.packageName}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })} 
                                </section>
                            </div>
                            }
                            {freelancersProfile.completedProjects &&
                            <section className="row projects mt-4">
                                <h4 className="text-center mb-4"><i className="fas fa-clipboard-check"></i> Completed Projects</h4>
                                {freelancersProfile.completedProjects.map(function(p){
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
                    </div>
                </div>
                <BuyerHireModal ref={modaldRef}/>
            </section>
        </div>
    )
}

export default BuyerViewFreelancersProfile
