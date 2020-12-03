import React from "react";

function Header() {
    return (
        <section id="header">
            <div className="container">
                <div className="navbar">
                    <div className="title">
                        <h1>Runaway</h1>
                    </div>

                    <nav >
                        <ul id="menuItems">
                            <li><a href="#home">Home</a></li>
                            <li>Products</li>
                            <li>Contact</li>
                            <li>About</li>
                            <li><i className="fas fa-shopping-cart"></i></li>
                        </ul>
                    </nav>

                    <button className="icon">
                        <i className="fa fa-bars fa-2x"></i>
                    </button>

                </div>

                <section id="home">
                    <div className="row">
                        <div className="col-2" >
                            <h1 data-aos="fade-up">All you need is a good run.</h1>
                            <p data-aos="fade-up">Time is too slow for those who wait, too swift for those who fear, too long for those who grieve, too short for those who rejoice, but for those who love, time is eternity.</p>
                            <div className="btn">
                                <button className="sign-up" type="button" name="button" data-aos="zoom-in">Sign up</button>
                                <button className="login" type="button" name="button" data-aos="zoom-in">Login</button>
                            </div>
                        </div>
                        <div className="col-2" data-aos="fade-left">
                            <img src="images\header-shoe.jpg" alt="nike-shoe" />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Header;