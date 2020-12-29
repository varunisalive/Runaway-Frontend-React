import React, { useEffect, useState } from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import Modal from "../Components/ImgModal/Modal";
import { CgDetailsMore } from "react-icons/cg";
import { useDispatchCart } from "../Context/CartContext";
import "./IndividualProducts.css";
import axios from "axios";



function IndividualProducts({ match }) {

    const id = match.params.id;

    const [product, setProduct] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const dispatch = useDispatchCart();

    const addToCart = item => {
        console.log(item);
        dispatch({
            type: "ADD", 
            item
        })
    }

    useEffect(() => {

        axios
            .get(`/products`)
            .then(res => {
                console.log(res.data);
                const product = res.data;
                if (id) {
                    product.forEach(product => {
                        if (product._id === id) {
                            console.log(product);
                            setProduct(product)
                        }

                    })
                }
            })
            .catch(err => {
                console.log(err);
            });


    }, []);






    return (
        <div>

            <div className="prod">
                <Navbar />
            </div>
            <div className="small-container single-product">

                <div className="row" >

                    <div className="col-2">
                        <img className="main-indi-img" src={product.imgURL} alt={product.name} onClick={() => setSelectedImage(product.imgURL)} />
                        <div className="small-img-row">
                            <div className="small-img-col" onClick={() => setSelectedImage("/images/nike-1-1.jpg")}>
                                <img className="indi-img" src="/images/nike-1-1.jpg" alt="nike11" />
                            </div>
                            <div className="small-img-col" onClick={() => setSelectedImage("/images/nike-1-2.jpg")}>
                                <img className="indi-img" src="/images/nike-1-2.jpg" alt="nike12" />
                            </div>
                            <div className="small-img-col" onClick={() => setSelectedImage("/images/nike-1-3.jpg")}>
                                <img className="indi-img" src="/images/nike-1-3.jpg" alt="nike13" />
                            </div>
                        </div>
                        { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
                    </div>

                    <div key={product._id} className="col-2">
                        <p>Home / Shoe</p>
                        <h1>{product.name}</h1>
                        <h4>₹{product.price}</h4>
                        <select>
                            <option>Select Size</option>
                            <option>7</option>
                            <option>9</option>
                            <option>10</option>
                            <option>12</option>
                            <option>13</option>
                        </select>
                        <input type="number" value="1" />
                        <button className="btn-cart" onClick={() => addToCart(product)}>Add to Cart</button>

                        <h3>Product Details <CgDetailsMore className="deets" /></h3>
                        <p className="detail">Deconstruct the past and step into the present with the Nike DBreak-Type. The airy mesh upper and exaggerated stitching add a bold, fresh look onto early Bowerman prototypes pulled from the archives. Retro suede and heel clips designed for support keep you connected to history while the rubber Waffle outsole features flashy angling at the back for a modern look.</p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default IndividualProducts;