import React from "react";

function Testimonials() {
    return (
        <section id="testimonial">
            <div className="small-container">
                <div className="row">
                    <div className="col-3" data-aos="fade-right">
                        <i className="fas fa-quote-left"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat tellus et eleifend porta. Phasellus auctor aliquet tortor nec aliquet. Aliquam elit erat, aliquet id ante sit amet, vestibulum ornare ipsum.</p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <img className="testimonial-img" src="images\Jennie.jpg" alt="lady-testimonial-pic" />
                        <h4>Jennie Kim</h4>
                    </div>
                    <div className="col-3" data-aos="fade-up">
                        <i className="fas fa-quote-left"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat tellus et eleifend porta. Phasellus auctor aliquet tortor nec aliquet. Aliquam elit erat, aliquet id ante sit amet, vestibulum ornare ipsum.</p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <img className="testimonial-img" src="images\Lisa.png" alt="lady-testimonial-pic" />
                        <h4>Lisa</h4>
                    </div>
                    <div className="col-3" data-aos="fade-left">
                        <i className="fas fa-quote-left"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat tellus et eleifend porta. Phasellus auctor aliquet tortor nec aliquet. Aliquam elit erat, aliquet id ante sit amet, vestibulum ornare ipsum.</p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <img className="testimonial-img" src="images\Jisoo.jpg" alt="lady-testimonial-pic" />
                        <h4>Kim Jisoo</h4>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Testimonials;