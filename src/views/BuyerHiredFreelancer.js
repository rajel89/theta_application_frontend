import Header from "../components/Header"
import BuyerProfile from "./BuyerProfile"
import BuyerDashboardLinks from "./BuyerDashboardLinks"
import { useState, useEffect } from 'react';
import axios from "axios";
import { environment } from "../environments/environment";
import { Link} from "react-router-dom";

import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

const BuyerHiredFreelancer = () => {
    const userProfile = JSON.parse(localStorage.getItem('userDetails'));
    const userDetails = userProfile.userDetails;
    const [hiredFreelancers, setHiredFreelancers] = useState({});

    const stripePromise = loadStripe('pk_test_51JgaWaCdGSRSIFBsl95DrzFeRFWj1tbyIVKYRmHQnzMlhX5HJ1Maq9YmCcdRK48SGsIcAF9m3dIdwXhWnxOzXONf00FIOrihCv');

    const ucwords = (str) => {
        return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
            return $1.toUpperCase();
        });
    }

    useEffect(() => {
        axios.get(environment.API_URL + 'buyer/hired/freelancers', {headers: {token: userProfile.token}})
        .then(response => {
            if(response.status === 200)
            {
                // console.log(response.data.jobApplications)
                setHiredFreelancers(response.data)
            }
        }).catch(err => {
            console.log(err.response.data)
        })

        return () => {
            setHiredFreelancers({});
        }
    }, [])

    return (
        <div>
            <Header title='Hired Freelancers' />
            <section className="buyer-dashboard-content mt-3">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col">
                            <BuyerProfile/>
                            <BuyerDashboardLinks/>
                        </div>
                        <div className="col-8 col-md-8">
                            <h4 className="text-center">View Hired Freelancers</h4>
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col" style={{width: '50px'}}></th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Project</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Payment</th>
                                    </tr>
                                </thead>
                                {hiredFreelancers.jobApplications &&
                                    <tbody>
                                        {hiredFreelancers.jobApplications.map(function(item){
                                            return (
                                                <tr key={item._id}>
                                                    <td><img src="../../../assets/img/avatar.png" alt="Admin" className="rounded-circle" width="45" /></td>
                                                    <td>{ucwords(item.seller.name)}</td>
                                                    {item.service.packageName &&
                                                        <td>{item.service.packageName}</td>
                                                    }
                                                    <td>
                                                        {/* {item.status} */}
                                                        <span className={`badge ${item.status == "Hired" ? "bg-primary" : item.status== "In Progress" ? "bg-secondary" : item.status == "Completed" ? "bg-success" : ""}`}>{item.status}</span>
                                                    </td>
                                                    <td>
                                                        <Elements stripe={stripePromise}>
                                                            <CheckoutForm />
                                                        </Elements>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                }
                                
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BuyerHiredFreelancer
