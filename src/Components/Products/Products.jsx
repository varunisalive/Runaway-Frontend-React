import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Products.css";


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
            <Link to="/products" className="product-link"><h1 className="title-product">Featured Products</h1></Link>
                <div className="row">
                    {
                        products.slice(4, 8).map(post => {
                            return (
                                <Link className="product-card-link" to={`/products/${post._id}`}>
                                    <ProductCard
                                        key={post._id}
                                        name={post.name}
                                        rating={post.rating}
                                        imgURL={post.imgURL}
                                        price={post.price}
                                        alt={post.name} />
                                </Link>
                            );
                        })
                    }
                </div>

                {/* Latest products  */}
                <Link to="/products" className="product-link"><h1 className="title-product">Latest Products</h1></Link>
                <div className="row">
                    {
                        products.map(post => {
                            return (
                                <Link className="product-card-link" to={`/products/${post._id}`}>
                                    <ProductCard
                                        key={post._id}
                                        name={post.name}
                                        rating={post.rating}
                                        imgURL={post.imgURL}
                                        price={post.price}
                                        alt={post.name} />
                                </Link>
                            );
                        })
                    }
                </div>

            </div>
        </section>

    );
}

export default Products;
