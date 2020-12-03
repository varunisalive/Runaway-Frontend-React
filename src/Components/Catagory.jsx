import React from "react";

function CatagoryCard(props) {
    return (
        <div className="col-3 col-img" data-aos="fade-up">
            <img src={props.img} alt={props.alt} />
        </div>
    );
}

function Catagory() {
    return (
        <section id="categories">
            <div className="small-container">
                <div className="row">
                    <CatagoryCard img="images\shoes-1.jpg" alt="shoe-1" />
                    <CatagoryCard img="images\shoes-2.jpg" alt="shoe-2" />
                    <CatagoryCard img="images\shoes-3.jpg" alt="shoe-3" />
                </div>
            </div>
        </section>
    );
}

export default Catagory;