import Header from "../components/Header"
import BuyerProfile from "./BuyerProfile"
import SellerDashboardLinks from "./SellerDashboardLinks"
import { useState, useEffect } from 'react';
import axios from "axios";
import { environment } from "../environments/environment";
import { Link} from "react-router-dom";

const SellerMessageInbox = () => {
    const userProfile = JSON.parse(localStorage.getItem('userDetails'));
    const userDetails = userProfile.userDetails;
    const [sellersInbox, setSellersInbox] = useState({});
    const [messageBox, setMessageBox] = useState('');

    const ucwords = (str) => {
        return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
            return $1.toUpperCase();
        });
    }

    const isSender = (id) => {
        return id === userDetails._id;
    }

    const sendMessage = (data) => {
        
        const application = data;
        application.conversation.push({message: messageBox, sender: userDetails.name, userId: userDetails._id})
        axios.post(environment.API_URL + 'seller/message/send', data, {headers: {token: userProfile.token}})
        .then(response => {
            if(response.status == 200)
            {
                // console.log(response.data)
                setMessageBox('')
            }
        })
    }

    useEffect(() => {
        axios.get(environment.API_URL + 'seller/message/inbox', {headers: {token: userProfile.token}})
        .then(response => {
            if(response.status === 200)
            {
                // console.log(response.data.jobApplications)
                setSellersInbox(response.data)
            }
        }).catch(err => {
            console.log(err.response.data)
        })

        return () => {
            setSellersInbox({});
        }
    }, [])

    return (
        <div>
            <Header title='Messages' />
            <section className="buyer-dashboard-content mt-3">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col">
                            <BuyerProfile/>
                            <SellerDashboardLinks/>
                        </div>
                        <div className="col-8 col-md-8">
                            <h4 className="text-center">Message Inbox</h4>
                            <hr/>
                            <div className="row d-flex align-items-start">
                                <div className="col-4 col-md-4">
                                    {sellersInbox.jobApplications &&
                                        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            {sellersInbox.jobApplications.map((item) => {
                                                return (
                                                    <button key={item._id} style={{textAlign: 'left'}} className="nav-link mb-2" id={`vl-${item._id}`} data-bs-toggle="pill" data-bs-target={`#v-${item._id}`} type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">{ucwords(item.service.packageName)}</button>
                                                )
                                            })

                                            }
                                        </div>
                                    }
                                </div>
                                <div className="col">
                                    {sellersInbox.jobApplications &&
                                    <div className="tab-content" id="v-pills-tabContent">
                                        {sellersInbox.jobApplications.map((item) => {
                                            return (
                                                <div key={`tabpane-${item._id}`} className="tab-pane" id={`v-${item._id}`} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <ul className="list-group list-group-flush">
                                                                {item.conversation.map((msg, i) => {
                                                                    return(
                                                                        <li key={`msg-${i}`} className={`list-group-item px-0 border-0 ${isSender(msg.userId) ? "d-flex justify-content-end" : "text-start"}`}>
                                                                            {!isSender(msg.userId) &&
                                                                                <span className="text-muted"><small>{ucwords(msg.sender)}</small></span>
                                                                            }
                                                                            <span className={isSender(msg.userId) ? 'content-sender' : 'content-receiver'}>{msg.message}</span>
                                                                        </li>
                                                                    )
                                                                })}
                                                                <li className="list-group-item px-0">
                                                                    <textarea className="form-control mb-2" placeholder="Type your message here.." rows="5" value={messageBox} onChange={(e) => {setMessageBox(e.target.value)}}></textarea>
                                                                    <button className="btn btn-sm btn-success pull-right" onClick={(e) => {sendMessage(item)}}>Send</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })

                                        }
                                        {sellersInbox.jobApplications.length > 0 &&
                                            <div className="tab-pane show active" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            <div className="card">
                                                <div className="card-body">
                                                    <p className="text-center">Click to open a message</p>
                                                </div>
                                            </div>
                                            </div>
                                        }
                                        
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SellerMessageInbox
