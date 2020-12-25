import React from "react";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';


function Header() {
    return (
        <section id="header">
            <div className="container">
                <div>
                    <Navbar />
                </div>

                <section id="home">
                    <div className="row">
                        <div className="col-2" >
                            <h1 data-aos="fade-up">All you need is a good run.</h1>
                            <p data-aos="fade-up">Time is too slow for those who wait, too swift for those who fear, too long for those who grieve, too short for those who rejoice, but for those who love, time is eternity.</p>
                            <div className="btn">
                                <Link to="/sign-up">
                                    <button className="sign-up" type="button" name="button" data-aos="zoom-in">Sign up</button>
                                </Link>
                                <Link to="/login">
                                    <button className="login" type="button" name="button" data-aos="zoom-in">Login</button>
                                </Link>


                            </div>
                        </div>
                        <div className="col-2" data-aos="fade-left">
                            <img src="images/header-shoe.jpg" alt="nike-shoe" />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Header;