import React, { useEffect, useState } from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { CgDetailsMore } from "react-icons/cg";
import "./IndividualProducts.css";
import axios from "axios";

import { Link } from "react-router-dom";


function IndividualProducts({ match }) {

    var id = match.params.id;

    const [product, setProduct] = useState([])


    useEffect(() => {
        fetchItem();
    }, []);


    const fetchItem = async () => {
        await axios
            .get(`/products/${id}`)
            .then(res => {
                console.log(res.data);
                const product = res.data;
                setProduct(product);

            })
            .catch(err => {
                console.log(err);
            });
    }



    return (
        <div>
            <div className="prod">
                <Navbar />
            </div>
            <div className="small-container single-product">
                
                    {
                        product.map(post => {
                            return (
                                <div className="row" >
                                    <div className="col-2">
                                        <img src={post.imgURL} alt={post.name} />
                                    </div>
                                    <div key={post._id} className="col-2">
                                        <p>Home / Shoe</p>
                                        <h1>{post.name}</h1>
                                        <h4>₹{post.price}</h4>
                                        <select>
                                            <option>Select Size</option>
                                            <option>7</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>12</option>
                                            <option>13</option>
                                        </select>
                                        <input type="number" value="1" />
                                        <Link className="btn-cart">Add to Cart</Link>

                                        <h3>Product Details <CgDetailsMore className="deets" /></h3>
                                        <p className="detail">Deconstruct the past and step into the present with the Nike DBreak-Type. The airy mesh upper and exaggerated stitching add a bold, fresh look onto early Bowerman prototypes pulled from the archives. Retro suede and heel clips designed for support keep you connected to history while the rubber Waffle outsole features flashy angling at the back for a modern look.</p>
                                    </div>
                                    </div>

                            );
                        })
                    }
                
            </div>
            <Footer />
        </div>
    );
}

export default IndividualProducts;