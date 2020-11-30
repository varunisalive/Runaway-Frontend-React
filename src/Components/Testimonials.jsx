import React from "react";

function Testimonials() {
    return (
        <section id="testimonial">
            <div class="small-container">
                <div class="row">
                    <div class="col-3" data-aos="fade-right">
                        <i class="fas fa-quote-left"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat tellus et eleifend porta. Phasellus auctor aliquet tortor nec aliquet. Aliquam elit erat, aliquet id ante sit amet, vestibulum ornare ipsum.</p>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <img class="testimonial-img" src="images\Jennie.jpg" alt="lady-testimonial-pic" />
                        <h4>Jennie Kim</h4>
                    </div>
                    <div class="col-3" data-aos="fade-up">
                        <i class="fas fa-quote-left"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat tellus et eleifend porta. Phasellus auctor aliquet tortor nec aliquet. Aliquam elit erat, aliquet id ante sit amet, vestibulum ornare ipsum.</p>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <img class="testimonial-img" src="images\Lisa.png" alt="lady-testimonial-pic" />
                        <h4>Lisa</h4>
                    </div>
                    <div class="col-3" data-aos="fade-left">
                        <i class="fas fa-quote-left"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat tellus et eleifend porta. Phasellus auctor aliquet tortor nec aliquet. Aliquam elit erat, aliquet id ante sit amet, vestibulum ornare ipsum.</p>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <img class="testimonial-img" src="images\Jisoo.jpg" alt="lady-testimonial-pic" />
                        <h4>Kim Jisoo</h4>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Testimonials;