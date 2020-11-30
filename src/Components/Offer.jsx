import React from "react";

function Offer() {
    return (
        <section id="offer">
            <div class="offer small-container">
                <h1 class="title-product">Exclusive Offer</h1>
                <img data-aos="fade-right" class="offer-img" src="images\nike-offer-1.jpg" alt="nike-offer-img" />
                <div class="offer-dec-div">
                    <p data-aos="fade-up" class="offer-desc">Exclusively Available on <spam>Runaway</spam></p>
                </div>
                <div class="offer-detail">
                    <h1 data-aos="fade-up">Nike Air Force 1</h1>
                    <p class="offer-bio" data-aos="fade-up">Designed by Bruce Kilgore and introduced in 1982, the Air Force 1 was the first ever basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture forever.</p>
                    <button data-aos="zoom-in" class="buy-now-btn" type="button" name="button"> Buy Now</button>
                </div>
            </div>
        </section>
    );
}

export default Offer;