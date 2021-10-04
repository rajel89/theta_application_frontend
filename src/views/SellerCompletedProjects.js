import {Link} from "react-router-dom";
import Header from "../components/Header"
import SellerDashboardLinks from "./SellerDashboardLinks";
import SellerAvailability from "./SellerAvailability";
import axios from 'axios'
import { environment } from "../environments/environment";
import  { useHistory  } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const SellerCompletedProjects = () => {
    const userProfile = JSON.parse(localStorage.getItem('userDetails'));
    const userDetails = userProfile.userDetails;

    const [dashboardDetails, setDashboardDetails] = useState({});

    const {register, handleSubmit, formState:{errors}, setValue } = useForm();
    const [ loading, setSpinner ] = useState(false);
    const [ errorMsg, setErrorMsg] = useState('');
    const [ successMsg, setSuccessMsg ] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [image, setImage] = useState('');
    const history = useHistory();

    const FormData = require('form-data');

    const ucwords = (str) => {
        return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
            return $1.toUpperCase();
        });
    }

    const uploadCompletedProject = (data) => {
        setSpinner(true);
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('image', image.target.files[0]);

        setTimeout(() => {
            axios.post(environment.API_URL + 'seller/project/upload', formData, {headers: {token: userProfile.token}})
            .then(response => {
                if(response.status == 200)
                {
                    // console.log(response.data)
                    setSuccessMsg(response.data.msg)
                    setSpinner(false);
                }
            }).catch(err => {
                setSpinner(false);
                setErrorMsg(err.response.data)
                // console.log(err.response.data)
            });
        }, 500)
        
        
    }

    const handleChange = (event) => {
        setImage(event);
        setImagePreview(URL.createObjectURL(event.target.files[0]));
    }

    useEffect(() => {
        axios.get(environment.API_URL + 'seller/dashboard', {headers: {token: userProfile.token}})
        .then(response => {
            if(response.status == 200)
            {
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
                        <div className="col-8 col-md-8 mb-5">
                            <h4>Upload completed project</h4>
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
                            <form className="mt-2" onSubmit={handleSubmit(uploadCompletedProject)}>
                                <div className="row">
                                    <div className="col-md-12 col-lg-3 text-center">
                                        <img className="img-fluid" src={imagePreview !== '' ? imagePreview : '../assets/img/placeholder.png'} />
                                        <input onChange={handleChange} className="mt-2" id="formFileSm" type="file" />
                                        {/* <button className="btn btn-sm btn-outline-primary mt-2" type="button">Upload picture</button> */}
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <label htmlFor="projectName">Project Name</label>
                                            <input placeholder="Project Name" className="form-control" type="text" {...register("name")} id="projectName" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="price">Description</label>
                                            <textarea {...register("description")} className="form-control" rows="5"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary pull-right" type="submit">
                                    {!loading &&
                                        <span>Save Project</span>
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

export default SellerCompletedProjects
