import React from "react";
import {Link} from "react-router-dom"
import {ShoppingBag} from 'phosphor-react'
import {Storefront} from 'phosphor-react'
import logoImage from "../assets/logo.png";
import {useNavigate} from 'react-router-dom'
import './navbar.css'
export const Navbar = () => {
    const navigate = useNavigate()
    return <div className = "navbar">
        <img src= {logoImage} onClick={() => navigate('/')} />
        <div className = "links">
            {/* <Link to ="/shop"> Shop</Link> */}
            <Link to ="/shop"> 
            <Storefront size ={32}/>
            </Link> 
            <Link to="/cart">
                <ShoppingBag size ={32}/>
            </Link>
        </div>
        </div>
};