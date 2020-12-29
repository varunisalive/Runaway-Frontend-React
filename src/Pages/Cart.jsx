import React from 'react';
import Navbar from "../Components/Header/Navbar";
import CartCard from "../Components/CartCard";
import { useCart } from "../Context/CartContext";
import "./Cart.css";

function Cart() {

    const items = useCart()

    return (
        <>
            <div>
                <Navbar />
            </div>

            <div className="container">
                <h1 className="cart-heading">Cart Items</h1>
                { items.map((item) => {
                    return(
                        <CartCard key={item.id} name={item.name} img={item.imgURL} rating={item.rating} price={item.price} />
                    );
                    
                })}
                
            </div>
        </>
    );
}

export default Cart;