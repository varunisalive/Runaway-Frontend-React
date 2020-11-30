import React from "react";

function Footer() {
    return (
        <section id="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col-1" data-aos="zoom-in">
                        <h3>Download our App</h3>
                        <p>Download the App for Android & iOS Devices</p>
                        <div class="app-logo">
                            <input class="google" type="image" src="images/play-store.png" alt="google-play-store-img" />
                            <input class="apple" type="image" src="images/app-store.png" alt="apple-store-img" />
                        </div>
                    </div>
                    <div class="footer-col-2" data-aos="zoom-in">
                        <h1>Runaway</h1>
                        <p>Our Purpose Is To Make Shoes Accessible To Each And Every Person.</p>
                    </div>
                    <div class="footer-col-3" data-aos="zoom-in">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Sustainability</li>
                        </ul>
                    </div>
                    <div class="footer-col-4" data-aos="zoom-in">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a class="footer-link" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i> Facebook</a></li>
                            <li><a class="footer-link" href="https://twitter.com/?lang=en"><i class="fab fa-twitter"></i>  Twitter</a></li>
                            <li><a class="footer-link" href="https://www.instagram.com/"><i class="fab fa-instagram"></i> Instagram</a></li>
                            <li><a class="footer-link" href="https://www.youtube.com/"><i class="fab fa-youtube"></i> Youtube</a></li>
                        </ul>
                    </div>
                </div>
                <hr class="line" />
                <p class="copyright">Copyright - @ 2020 Runaway, Inc.</p>
            </div>
        </section>

    );
}

export default Footer;