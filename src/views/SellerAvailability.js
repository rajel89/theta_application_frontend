import { environment } from "../environments/environment";
import { useState, useEffect } from 'react';
import axios from "axios";

const SellerAvailability = () => {
    const userProfile = JSON.parse(localStorage.getItem('userDetails'));
    // console.log(userProfile)
    const [isAvailable, setStatusAvailability] = useState({});
    // console.log(userProfile)
    

    useEffect(() => {
        axios.get(environment.API_URL + 'seller/availability', {headers: {token: userProfile.token}})
        .then((response) => {
            setStatusAvailability(response.data.isAvailable)
        })
    }, []);

    const setAvailability = (e) => {
        // console.log('Is available: ' + e.target.value)
        
        setStatusAvailability(e.target.value == "true" ? true : false)
        /* Submit via axios */
        axios.post(environment.API_URL + 'seller/availability/save', {isAvailable: (e.target.value == "true" ? true : false)}, {headers: {token: userProfile.token}})
        .then((response) => {
            // console.log(response.data)
        })
    }

    return (
        <div className="btn-group" role="group" aria-label="Basic checkbox toggle">
            <input onChange={setAvailability} checked={isAvailable == true} type="radio" value="true" name="userAvailability" className="btn-check" id="hireForService" autoComplete="off" />
            <label className="btn btn-outline-primary" htmlFor="hireForService">Available</label>

            <input onChange={setAvailability} checked={isAvailable == false} type="radio" value="false" name="userAvailability" className="btn-check" id="workAsFreelancer" autoComplete="off" />
            <label className="btn btn-outline-primary" htmlFor="workAsFreelancer">Not Available</label>
        </div>
    )
}

export default SellerAvailability
