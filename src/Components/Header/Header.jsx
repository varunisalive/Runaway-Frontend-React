import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function Header() {
    return (
        <section id="header">
            <div className="container">
                <div>
                    <Router>
                        <Navbar />
                        <Switch>
                            <Route path="/" />
                        </Switch>
                    </Router>

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
                            <img src="images/header-shoe.jpg" alt="nike-shoe" />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Header;