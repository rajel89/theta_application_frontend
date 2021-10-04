
import Header from "../components/Header"
import BuyerDashboardLinks from "./BuyerDashboardLinks"
import { useState, useEffect } from 'react';
import axios from "axios";
import { environment } from "../environments/environment";
import { Link} from "react-router-dom";

const BuyerProfile = () => {
    const userProfile = JSON.parse(localStorage.getItem('userDetails'));
    const [userDetails, setUserDetails] = useState(userProfile.userDetails);

    const ucwords = (str) => {
        return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
            return $1.toUpperCase();
        });
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                    <img src="../../../assets/img/avatar.png" alt="Admin" className="rounded-circle" width="150" />
                    <div className="mt-3">
                        <h4>{ucwords(userDetails.name)}</h4>
                        <p className="text-secondary mb-1">Buyer</p>
                        <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                        <p className="text-muted"><i className="fas fa-circle text-success"></i> Available</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyerProfile
