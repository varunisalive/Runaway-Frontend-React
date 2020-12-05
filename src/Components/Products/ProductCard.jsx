import React from "react";
import { FaStar } from "react-icons/fa";

function ProductCard(props) {

    return (
        <div className="col-4" data-aos="fade-up">
            <div key={props._id}>
                <img src={props.imgURL} alt={props.name} />
                <h4>{props.name}</h4>
                <div className="rating">
                    <label>
                        <FaStar color={props.rating >= 1 ? '#FF9529' : '#e4e5e9'} />
                        <FaStar color={props.rating >= 2 ? '#FF9529' : '#e4e5e9'} />
                        <FaStar color={props.rating >= 3 ? '#FF9529' : '#e4e5e9'} />
                        <FaStar color={props.rating >= 4 ? '#FF9529' : '#e4e5e9'} />
                        <FaStar color={props.rating >= 5 ? '#FF9529' : '#e4e5e9'} />
                    </label>
                </div>
                <p>₹{props.price}</p>
            </div>
        </div>
    );

}

export default ProductCard;