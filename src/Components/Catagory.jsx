import React from "react";

function Catagory() {
    return (
        <section id="categories">
            <div className="small-container">
                <div className="row">

                    <div className="col-3 col-img" data-aos="fade-up">
                        <img src="images\shoes-1.jpg" alt="shoe-1" />
                    </div>
                    <div className="col-3" data-aos="fade-up">
                        <img src="images\shoes-2.jpg" alt="shoe-2" />
                    </div>
                    <div className="col-3" data-aos="fade-up">
                        <img src="images\shoes-3.jpg" alt="shoe-3" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Catagory;