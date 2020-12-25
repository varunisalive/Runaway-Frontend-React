import React from 'react';
import Navbar from "../Components/Header/Navbar";
import "./Signup.css";

function Signup() {
    return (
        <div>
            <div className="nav">
                <Navbar />
            </div>
            <div className="container">
                <form className="form">
                    <h2 className="heading">Sign Up</h2>
                    <div className="form-input">
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div className="form-input">
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <div className="form-input">
                        <label>Re-Enter Password</label>
                        <input type="password" />
                    </div>
                    <button className="form-btn">Register</button>
                </form>
            </div>


        </div>
    )
}

export default Signup;
