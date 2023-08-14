// basically going to allow users to see order summary, select payment method

import React, { useRef, useContext }  from 'react';
import emailjs from '@emailjs/browser';
import {ShopContext} from "../../context/shop-context"
import {CartItemCheckout} from '../cart/cart-item-checkout'
import { PRODUCTS } from "../../products";
import './checkout.css'
import {useNavigate} from 'react-router-dom'
export const Checkout = () =>{
    const {cartItems,getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()
    const navigate = useNavigate()
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sx2299h', 'template_t0ds3yr', form.current, 'ST-zuq4fAr0ro3Znq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return <div className = "checkout">
        <div className = "orderSum">
            Order Summary:
            <div className = "cartItems">
            {PRODUCTS.map((product)=>{
                if (cartItems[product.id]!== 0){
                    return <CartItemCheckout data={product}/>
                }
            })}
            </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
            <div>
                Order Information:
            </div>
      <label>Name</label>
      <br />
      <input  type="text" name="to_name" />
      <br />
      <br />
      <label>Email</label>
      <br />
      <input type="email" name="from_name" />
      <br />
      <br />
      <label>Shipping Address</label>
      <br />
      <textarea name="message" />
      <br />
      <br />
      <p>Choose payment type:</p>
    
        <input type="radio" value="Male" name="zelle" /> Zelle: 6507876333
        <br />
        <input type="radio" value="Female" name="zelle" /> Venmo: cindyliang_
    
        <br />
       <br />
      <label>
        We charge a flat fee shipping of $6 for all packages unless you live in the DFW area.
        <br />
        <br />
       <b>Order Total: ${totalAmount+6}</b> </label>
        <br />
        <br />
        <div></div>
      <input type="submit" value="Submit Order" onClick={() => navigate('/orderplaced')}/>
    </form>
    </div>
};