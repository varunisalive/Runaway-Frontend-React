import React from "react";
import { FaStar } from "react-icons/fa";


function TestimonialsCard(props) {

    return (
        <div className="col-3" data-aos="fade-right">
            <i className="fas fa-quote-left"></i>
            <p>{props.content}</p>
            <div className="rating">
                <label>
                    <FaStar color={props.ratings >= 1 ? '#FF9529' : '#e4e5e9'} />
                    <FaStar color={props.ratings >= 2 ? '#FF9529' : '#e4e5e9'} />
                    <FaStar color={props.ratings >= 3 ? '#FF9529' : '#e4e5e9'} />
                    <FaStar color={props.ratings >= 4 ? '#FF9529' : '#e4e5e9'} />
                    <FaStar color={props.ratings >= 5 ? '#FF9529' : '#e4e5e9'} />
                </label>
            </div>
            <img className="testimonial-img" src={props.img} alt={props.alt} />
            <h4>{props.name}</h4>
        </div>
    );
}

function Testimonials() {
    return (
        <section id="testimonial">
            <div className="small-container">
                <div className="row">
                    <TestimonialsCard
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat tellus et eleifend porta. Phasellus auctor aliquet tortor nec aliquet. Aliquam elit erat, aliquet id ante sit amet, vestibulum ornare ipsum."
                        ratings="5"
                        name="Jennie Kim"
                        img="images\Jennie.jpg"
                        alt="lady-testimonial-pic" />
                    <TestimonialsCard
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat tellus et eleifend porta. Phasellus auctor aliquet tortor nec aliquet. Aliquam elit erat, aliquet id ante sit amet, vestibulum ornare ipsum."
                        ratings="4"
                        name="Lisa"
                        img="images\Lisa.png"
                        alt="lady-testimonial-pic" />
                    <TestimonialsCard
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat tellus et eleifend porta. Phasellus auctor aliquet tortor nec aliquet. Aliquam elit erat, aliquet id ante sit amet, vestibulum ornare ipsum."
                        ratings="5"
                        name="Kim Jisoo"
                        img="images\Jisoo.jpg"
                        alt="lady-testimonial-pic" />
                </div>
            </div>
        </section>

    );
}

export default Testimonials;