import React,{useContext} from "react";
import {ShopContext} from "../../context/shop-context"

export const CartItemCheckout = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart,updateCartItemCount} = useContext(ShopContext);
    return <div className="CartItemCheckout">
        <img src={productImage} />
        <div className = "description">
            <p>
                <b>{productName}</b> ${price} ({cartItems[id]})</p>
            

        </div>
    </div>
}