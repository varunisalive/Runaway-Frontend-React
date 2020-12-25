import React, { useState, useEffect } from "react";
import Navbar from "../Components/Header/Navbar";
import ProductCard from "../Components/Products/ProductCard";
import Footer from "../Components/Footer/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("/products")
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <section id="products">
        <Navbar />

        <div className="small-container">
          <div className="row row-2">
            <h2>All Products</h2>
            <select>
              <option>Default Sorting</option>
              <option>Sort by Price</option>
              <option>Sort by Popularity</option>
              <option>Sort by Rating</option>
              <option>Sort by Sale</option>
            </select>
          </div>

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

          <div className="page-btn">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span><i className="fas fa-arrow-right"></i></span>
          </div>

        </div>
      </section>
      <Footer />
    </div>

  );
}

export default Products;