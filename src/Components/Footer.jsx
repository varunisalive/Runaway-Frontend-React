import React from "react";

function Footer() {
    return (
        <section id="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1" data-aos="zoom-in">
                        <h3>Download our App</h3>
                        <p>Download the App for Android & iOS Devices</p>
                        <div className="app-logo">
                            <input className="google" type="image" src="images/play-store.png" alt="google-play-store-img" />
                            <input className="apple" type="image" src="images/app-store.png" alt="apple-store-img" />
                        </div>
                    </div>
                    <div className="footer-col-2" data-aos="zoom-in">
                        <h1>Runaway</h1>
                        <p>Our Purpose Is To Make Shoes Accessible To Each And Every Person.</p>
                    </div>
                    <div className="footer-col-3" data-aos="zoom-in">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Sustainability</li>
                        </ul>
                    </div>
                    <div className="footer-col-4" data-aos="zoom-in">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a className="footer-link" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i> Facebook</a></li>
                            <li><a className="footer-link" href="https://twitter.com/?lang=en"><i className="fab fa-twitter"></i>  Twitter</a></li>
                            <li><a className="footer-link" href="https://www.instagram.com/"><i className="fab fa-instagram"></i> Instagram</a></li>
                            <li><a className="footer-link" href="https://www.youtube.com/"><i className="fab fa-youtube"></i> Youtube</a></li>
                        </ul>
                    </div>
                </div>
                <hr className="line" />
                <p className="copyright">Copyright - @ 2020 Runaway, Inc.</p>
            </div>
        </section>

    );
}

export default Footer;