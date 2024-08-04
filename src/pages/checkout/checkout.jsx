// basically going to allow users to see order summary, select payment method

import React, { useRef, useContext, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ShopContext } from "../../context/shop-context"
import { CartItemCheckout } from '../cart/cart-item-checkout'
import { PRODUCTS } from "../../products";
import './checkout.css'
import { useNavigate } from 'react-router-dom'

export const Checkout = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const [address, setAddress] = useState('');
    const [payment, setPayment] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [order, setOrder] = useState('');

    const totalAmount = getTotalCartAmount()
    const navigate = useNavigate()
    const form = useRef();
    let orders = [];
    //const history = useHistory();

    const sendEmail = (e) => {
        e.preventDefault();
        setOrder(orders)
        var templateParams = {
            name: name,
            email: email,
            address: address,
            payment: payment,
            order: orders,
        };
        console.log(name);
        console.log(orders);

        emailjs.send('service_sx2299h', 'template_t0ds3yr', templateParams, 'ST-zuq4fAr0ro3Znq')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log('here');
                console.log(error.text);
            });
        navigate('/clairesdelights/orderplaced');
    };
    return <div className="checkout">
        <div className="orderSum">
            Order Summary:
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        orders.push([product.productName, cartItems[product.id]])
                        console.log(orders)

                        return <CartItemCheckout data={product} />
                    }
                })
                }

            </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
            <div>
                Order Information:
            </div>
            <label>Name</label>
            <br />
            <input type="text" name="to_name" onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <label>Email</label>
            <br />
            <input type="email" name="from_name" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <br />
            <label>Shipping Address</label>
            <br />
            <textarea name="message" onChange={(e) => setAddress(e.target.value)} />
            <br />
            <br />
            <p>Choose payment type:</p>

            <input type="radio" value="Zelle" name="zelle" onChange={(e) => setPayment('zelle')} /> Zelle: 6507876333
            <br />
            <input type="radio" value="Venmo" name="Venmo" onChange={(e) => setPayment('venmo')} /> Venmo: cindyliang_

            <br />
            <br />
            <label name="price">
                We charge a flat fee shipping of $6 for all packages unless you live in the DFW area.
                <br />
                <br />
                <b>Order Total: ${totalAmount + 6}</b> </label>
            <br />
            <br />
            <div></div>

            <input type="submit" value="Submit Order" />
        </form>
    </div>
};