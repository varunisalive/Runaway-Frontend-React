import React, { useContext } from "react";
import AuthService from "../../Services/AuthServices";
import { AuthContext } from "../../Context/AuthContext";
import Navbar from "./Navbar";
import "./Navbar.css"
import { Link } from 'react-router-dom';


function Header(props) {

    const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);

   

    const onClickLogoutHandler = () => {
        AuthService.logout().then(data => {
            if (data.success) {
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
    }


    const unauthenticated = () => {
        return (
            <>
                <Link to="/sign-up">
                    <button className="sign-up" type="button" name="button" data-aos="zoom-in">Sign up</button>
                </Link>
                <Link to="/login">
                    <button className="login" type="button" name="button" data-aos="zoom-in">Login</button>
                </Link>
            </>
        );
    }

    const authenticated = () => {
        return (
            <>
                {
                    user.role === "admin" ?
                        <Link to="/admin">
                            <button className="admin" type="button" name="button" data-aos="zoom-in">Admin</button>
                        </Link> : null
                }
                <button className="logout" type="button" name="button" data-aos="zoom-in" onClick={onClickLogoutHandler}>Logout</button>
                <p className="username-para">Welcome, <strong className="username">{user.username} !</strong></p>
            </>
        );
    }

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
                                {!isAuthenticated ? unauthenticated() : authenticated()}
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