import React from 'react';
import Navbar from "../Components/Header/Navbar";
import "./Signup.css";

function Login() {
    return (
        <div>
            <div className="nav">
                <Navbar />
            </div>
            <div className="container">
                <form className="form">
                    <h2 className="heading">Login</h2>
                    <div className="form-input">
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div className="form-input">
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <button className="form-btn">Login</button>
                </form>
            </div>


        </div>
    )
}

export default Login;
