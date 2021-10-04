import Header from "../components/Header"
import BuyerProfile from "./BuyerProfile"
import BuyerDashboardLinks from "./BuyerDashboardLinks"
import axios from 'axios'
import { environment } from "../environments/environment";
import  { useHistory, useParams  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const BuyerCreateJobPost = () => {
    const userProfile = JSON.parse(localStorage.getItem('userDetails'));
    const userDetails = userProfile.userDetails;

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
        axios.get(environment.API_URL + `buyer/jobs/${params.id}`, {headers: {token: userProfile.token}})
        .then(response => {
            if(response.status == 200)
            {
                setValue("title", response.data.jobpost.title);
                setValue("description", response.data.jobpost.description);
                setValue("budget", response.data.jobpost.budget);
            }
        }).catch(err => {
            setErrorMsg(err.response.data)
        });
    }, []);


    const updateJobPost = (data) => {
        setSpinner(true);
        axios.post(environment.API_URL + `buyer/jobs/${params.id}/update`, data, {headers: {token: userProfile.token}})
        .then(response => {
            if(response.status == 200)
            {
                setSuccessMsg(response.data.msg)
                setSpinner(false);
            }
        }).catch(err => {
            setSpinner(false)
            setErrorMsg(err.response.data)
        })
    };

    return (
        <div>
            <Header title='Update Job Post' />
            <section className="buyer-dashboard-content mt-3">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col">
                            <BuyerProfile/>
                            <BuyerDashboardLinks/>
                        </div>
                        <div className="col-8 col-md-8">
                            <section>
                                <h4 className="text-center">Edit Job Posting</h4>
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
                                <form className="mt-2" onSubmit={handleSubmit(updateJobPost)}>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <label htmlFor="projectName">Title</label>
                                                <input placeholder="Type your job title" className="form-control" type="text" {...register("title")} id="projectName" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="price">Job Description</label>
                                                <textarea {...register("description")} className="form-control" rows="15"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-3">
                                            <div className="mb-3">
                                                <label htmlFor="budget">Proposed budget</label>
                                                <input placeholder="e.g. $1,000.00" className="form-control" type="text" {...register("budget")} id="budget" />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary pull-right" type="submit">
                                        {!loading &&
                                            <span>Create and Publish</span>
                                        }
                                        {loading &&
                                            <div className="d-flex align-items-center">
                                                <strong>Please wait...</strong>
                                            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                                        </div>
                                        }
                                    </button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BuyerCreateJobPost
