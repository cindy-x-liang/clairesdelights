import React from "react";
import {useNavigate} from 'react-router-dom'

import './finished.css'
export const Finished = () =>{
    const navigate = useNavigate()
    return <div className = "finished">

    <h1>Thank you for supporting our small business! Your order has been placed.</h1>
    <p>Orders will not be processed until payment is received. </p>
       
        <div></div>
        <button onClick={() => navigate('/clairesdelights/shop')}>Keep Shopping</button>
    </div>
};