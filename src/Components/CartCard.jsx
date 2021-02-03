import React from 'react';
import { FaStar } from 'react-icons/fa';
import { AiOutlineClose } from "react-icons/ai";
import "./CartCard.css";


function CartCard(props) {
    return (
        <>
            <div className="row-cart">
                <button className="remove-btn" >
                    <AiOutlineClose size={28} />
                </button>

                <div className="img-col">
                    <img className="cart-img" src={props.img} alt="nike12" />
                </div>
                <div className="cart-details">
                    <h1 className="cart-product-name">{props.name}</h1>
                    <div className="rating">
                        <label>
                            <FaStar color={props.rating >= 1 ? '#FF9529' : '#e4e5e9'} />
                            <FaStar color={props.rating >= 2 ? '#FF9529' : '#e4e5e9'} />
                            <FaStar color={props.rating >= 3 ? '#FF9529' : '#e4e5e9'} />
                            <FaStar color={props.rating >= 4 ? '#FF9529' : '#e4e5e9'} />
                            <FaStar color={props.rating >= 5 ? '#FF9529' : '#e4e5e9'} />
                        </label>
                    </div>
                    <h4 className="cart-price">₹{props.price}</h4>
                </div>

            </div>
            <hr className="cart-line" />
        </>
    )
}

export default CartCard
