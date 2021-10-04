import Header from "../components/Header"
import SellerDashboardLinks from "./SellerDashboardLinks";

import { useForm } from 'react-hook-form';
import axios from 'axios'
import { environment } from "../environments/environment";
import  { useHistory  } from 'react-router-dom'
import { useState, useEffect } from 'react';

const SellerProfile = () => {
    const userProfile = JSON.parse(localStorage.getItem('userDetails'));
    const [userDetails, setUserDetails] = useState(userProfile.userDetails);

    const {register, handleSubmit, formState:{errors}, setValue } = useForm();
    const [ loading, setSpinner ] = useState(false);
    const [ errorMsg, setErrorMsg] = useState('');
    const [ successMsg, setSuccessMsg ] = useState('');
    const history = useHistory();

    const ucwords = (str) => {
        return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
            return $1.toUpperCase();
        });
    }

    useEffect(() => {
        axios.get(environment.API_URL + 'seller/profile', {headers: {token: userProfile.token}})
        .then(response => {
            if(response.status === 200)
            {
                if(response.data.profile !== null)
                {
                    setValue("jobSkills", response.data.profile.jobSkills)
                    setValue("address", response.data.profile.address)
                    setValue("aboutMe", response.data.profile.aboutMe)
                }
            }
        }).catch(err => {
            // setErrorMsg(err.response.data)
            console.log(err)
        });
    });

    const updateMyProfile = (data) => {

        axios.post(environment.API_URL + 'seller/update-profile', data, {headers: {token: userProfile.token}})
        .then(response => {
            if(response.status === 200)
            {
                setUserDetails(response.data.userDetails)
                setSuccessMsg(response.data.msg)
            }
        }).catch(err => {
            setSpinner(false)
            setErrorMsg(err.response.data)
        })
    }

    return (
        <div>
            <Header title='Seller Profile'/>
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
                            <h4>Edit my profile</h4>
                            <hr/>
                            {successMsg !== "" &&
                                <div className="alert alert-success" role="alert">
                                    {successMsg}
                                </div>
                            }
                            <form className="mt-2" onSubmit={handleSubmit(updateMyProfile)}>
                                <div className="mb-3">
                                    <label htmlFor="jobSkills">Job Skills</label>
                                    <input placeholder="e.g. Full stack developer" className="form-control" type="text" {...register("jobSkills")} id="jobSkills" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address">Address</label>
                                    <input placeholder="Your current location" className="form-control" type="text" {...register("address")} id="address" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="aboutMe">About Me</label>
                                    <textarea placeholder="Tell something about yourself" className="form-control" {...register("aboutMe")} id="aboutMe" cols="30" rows="30"></textarea>
                                </div>
                                <button className="btn btn-primary d-block w-100" type="submit">
                                    {!loading &&
                                        <span>Update Profile</span>
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

export default SellerProfile
