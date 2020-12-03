import React from "react";

function BrandCard(props) {
    return (
        <div className="col-5">
            <img src={props.img} alt={props.alt} />
        </div>
    )
}

function Brands() {
    return (
        <section id="brands">
            <div className="small-container">
                <div className="row" data-aos="fade-up">
                    <BrandCard img="images\Godrej-01.png" alt="godrej-img" />
                    <BrandCard img="images\Coca-Cola-01.png" alt="coca-cola-img" />
                    <BrandCard img="images\NIKE-Full-01.png" alt="nike-img" />
                    <BrandCard img="images\PayPal-01.png" alt="paypal-img" />
                    <BrandCard img="images\Spotify-01.png" alt="spotify-img" />
                </div>
            </div>
        </section>
    );
}

export default Brands;