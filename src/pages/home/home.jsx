import React from "react";
import {useNavigate} from 'react-router-dom'
import logoImage from "../../assets/logo.png";
import imageIntro from "../../assets/infoImage.png";
import './home.css'
export const Home = () =>{
    const navigate = useNavigate()
    return <div className = "home">
        <div>
        <h1>Welcome to our store. All earrings are handcrafted. <span></span></h1>
        </div>

       
        <img src={imageIntro}/>
        <div></div>
        <button  onClick={() => navigate('/shop')}>Start Shopping</button>
    </div>
};