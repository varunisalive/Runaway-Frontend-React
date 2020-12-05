import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";


function Products() {

    const [products, setProducts] = useState([])


    useEffect(() => {
        axios
            .get("/products")
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section id="products">
            <div className="small-container">
                <h1 className="title-product">Featured Products</h1>
                <div className="row">
                    {
                        products.slice(4, 8).map(post => {
                            return (
                                <ProductCard
                                    key={post._id}
                                    name={post.name}
                                    rating={post.rating}
                                    imgURL={post.imgURL}
                                    price={post.price}
                                    alt={post.name} />
                            );
                        })
                    }
                </div>

                {/* Latest products  */}
                <h1 className="title-product">Latest Products</h1>
                <div className="row">
                    <div className="col-4" data-aos="fade-up">
                        <img src="images/nike-3.jpg" alt="LeBron Witness 4" />
                        <h4>LeBron Witness 4</h4>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <p>₹7,995</p>
                    </div>
                    <div className="col-4" data-aos="fade-up">
                        <img src="images/nike-6.jpg" alt="LeBron 17 'Fire Red'" />
                        <h4>LeBron 17 'Fire Red'</h4>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <p>₹18,995</p>
                    </div>
                    <div className="col-4" data-aos="fade-up">
                        <img src="images/nike-7.jpg" alt="LeBron Soldier 13 FlyEase" />
                        <h4>LeBron Soldier 13 FlyEase</h4>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <p>₹6,397</p>
                    </div>
                    <div className="col-4" data-aos="fade-up">
                        <img src="images/nike-8.jpg" alt="LeBron Witness 5 EP" />
                        <h4>LeBron Witness 5 EP</h4>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <p>₹8,295</p>
                    </div>
                </div>


                <div className="row" data-aos="fade-up">
                    <div className="col-4" data-aos="fade-up">
                        <img src="images/nike-4.jpg" alt="nike-air-pegasus" />
                        <h4>Nike Air Zoom Pegasus 37</h4>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <p>₹9,995</p>
                    </div>
                    <div className="col-4" data-aos="fade-up">
                        <img src="images/nike-5.jpg" alt="Zoom Freak 2" />
                        <h4>Zoom Freak 2</h4>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <p>₹10,295</p>
                    </div>
                    <div className="col-4" data-aos="fade-up">
                        <img src="images/nike-1.jpg" alt="Nike DBreak-Type" />
                        <h4>Nike DBreak-Type</h4>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <p>₹8,195</p>
                    </div>
                    <div className="col-4" data-aos="fade-up">
                        <img src="images/nike-2.jpg" alt="LeBron Witness 5 EP" />
                        <h4>LeBron Witness 5 EP</h4>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <p>₹8,295</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;
