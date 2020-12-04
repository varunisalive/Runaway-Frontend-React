import React from "react";

function Offer() {
    return (
        <section id="offer">
            <div className="offer small-container">
                <h1 className="title-product">Exclusive Offer</h1>
                <img data-aos="fade-right" className="offer-img" src="images/nike-offer-1.jpg" alt="nike-offer-img" />
                <div className="offer-dec-div">
                    <p data-aos="fade-up" className="offer-desc">Exclusively Available on <span>Runaway</span></p>
                </div>
                <div className="offer-detail">
                    <h1 data-aos="fade-up">Nike Air Force 1</h1>
                    <p className="offer-bio" data-aos="fade-up">Designed by Bruce Kilgore and introduced in 1982, the Air Force 1 was the first ever basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture forever.</p>
                    <button data-aos="zoom-in" className="buy-now-btn" type="button" name="button"> Buy Now</button>
                </div>
            </div>
        </section>
    );
}

export default Offer;