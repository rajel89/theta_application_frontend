import Header from "../components/Header"
import SellerDashboardLinks from "./SellerDashboardLinks";

import { useForm } from 'react-hook-form';
import axios from 'axios'
import { environment } from "../environments/environment";
import  { useHistory, useParams  } from 'react-router-dom'
import { useState, useEffect } from 'react';
const SellerEditServicePackage = () => {
    const userProfile = JSON.parse(localStorage.getItem('userDetails'));
    const [userDetails, setUserDetails] = useState(userProfile.userDetails);

    const {register, handleSubmit, formState:{errors}, setValue } = useForm();
    const [ loading, setSpinner ] = useState(false);
    const [ errorMsg, setErrorMsg] = useState('');
    const [ successMsg, setSuccessMsg ] = useState('');
    const history = useHistory();
    const params = useParams();

    const ucwords = (str) => {
        return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
            return $1.toUpperCase();
        });
    }

    useEffect(() => {
        axios.get(environment.API_URL + `seller/service-package/${params.id}`, {headers: {token: userProfile.token}})
        .then(response => {
            if(response.status == 200)
            {
                setValue("packageName", response.data.package.packageName);
                setValue("packagePrice", response.data.package.packagePrice);
                setValue("isPopular", response.data.package.isPopular);
                
                setValue("inclusions[0]", response.data.package.inclusions[0]);
                setValue("inclusions[1]", response.data.package.inclusions[1]);
                setValue("inclusions[2]", response.data.package.inclusions[2]);
                setValue("inclusions[3]", response.data.package.inclusions[3]);
                setValue("inclusions[4]", response.data.package.inclusions[4]);
            }
        }).catch(err => {
            // setErrorMsg(err.response.data)
            console.log(err)
        });
    }, []);

    const updateServicePackage = (data) => {

        setSpinner(true);
        axios.post(environment.API_URL + `seller/service-package/${params.id}/update`, data, {headers: {token: userProfile.token}})
        .then(response => {
            if(response.status == 200)
            {
                setErrorMsg('');
                setSuccessMsg(response.data.msg)
                setSpinner(false);
            }
        }).catch(err => {
            setSpinner(false);
            setErrorMsg(err.response.data);
        })
    }
    return (
        <div>
            <Header title='Service Package'/>
            <section className="seller-dashboard-content mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="../assets/img/avatar.png" alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>{ucwords(userDetails.name)}</h4>
                                            {userDetails.profile &&
                                                <p className="text-secondary mb-1">{userDetails.profile.jobSkills}</p>   
                                            }
                                            {userDetails.profile &&
                                                <p className="text-muted font-size-sm">{userDetails.profile.address}</p>
                                            }
                                            <div className="btn-group" role="group" aria-label="Basic checkbox toggle">
                                                <input type="radio" value="buyer" name="userAvailability" className="btn-check" id="hireForService" autoComplete="off" />
                                                <label className="btn btn-outline-primary" htmlFor="hireForService">Available</label>

                                                <input type="radio" value="seller" name="userAvailability" className="btn-check" id="workAsFreelancer" autoComplete="off" />
                                                <label className="btn btn-outline-primary" htmlFor="workAsFreelancer">Not Available</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <SellerDashboardLinks/>
                        </div>
                        <div className="col-8 col-md-8 mb-5">
                            <h4>Update Service Package</h4>
                            <hr/>
                            {successMsg !== '' &&
                                <div className="alert alert-success" role="alert">
                                    {successMsg}
                                </div>
                            }
                            {errorMsg !== '' &&
                                <div className="alert alert-danger" role="alert">
                                    {errorMsg}
                                </div>
                            }
                            <form className="mt-2" onSubmit={handleSubmit(updateServicePackage)}>
                                <div className="mb-3">
                                    <label htmlFor="packageName">Service Package Name</label>
                                    <input placeholder="e.g. Web development" className="form-control" type="text" {...register("packageName")} id="packageName" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price">Service package price</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">$</span>
                                        <input type="text" className="form-control" placeholder="1,200.00" {...register("packagePrice")} id="price" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" {...register("isPopular")} id="isPopular" />
                                        <label className="form-check-label" htmlFor="isPopular">
                                            Mark this package as popular
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="jobSkills">Your package inclusions</label>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">1.</span>
                                                <input type="text" className="form-control"  {...register("inclusions[0]")} id="inclusion1" />
                                            </div>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon2">2.</span>
                                                <input type="text" className="form-control"  {...register("inclusions[1]")} id="inclusion2" />
                                            </div>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon3">3.</span>
                                                <input type="text" className="form-control"  {...register("inclusions[2]")} id="inclusion3" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon4">4.</span>
                                                <input type="text" className="form-control"  {...register("inclusions[3]")} id="inclusion4" />
                                            </div>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon4">5.</span>
                                                <input type="text" className="form-control"  {...register("inclusions[4]")} id="inclusion5" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <button className="btn btn-primary d-block w-100" type="submit">
                                    {!loading &&
                                        <span>Update Package</span>
                                    }
                                    {loading &&
                                        <div className="d-flex align-items-center">
                                            <strong>Please wait...</strong>
                                        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                                    </div>
                                    }
                                </button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SellerEditServicePackage
