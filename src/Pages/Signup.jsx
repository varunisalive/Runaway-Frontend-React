import React, { useContext, useState } from 'react';
import AuthService from "../Services/AuthServices";
import { AuthContext } from "../Context/AuthContext";
// import Message from "../Components/Messages";
import Navbar from "../Components/Header/Navbar";
import "./Signup.css";

function Signup(props) {

    const [user, setUser] = useState({Username: "", Password: ""})
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    return (
        <div>
            <div className="nav">
                <Navbar />
            </div>
            <div className="container">
                <form className="form">
                    <h2 className="heading">Sign Up</h2>
                    <div className="form-input">
                        <label>Username</label>
                        <input type="text" name="Username" placeholder="Enter Username" />
                    </div>
                    <div className="form-input">
                        <label>Email</label>
                        <input type="email" name="Email" placeholder="Enter Email" />
                    </div>
                    <div className="form-input">
                        <label>Password</label>
                        <input type="password" name="Password" placeholder="Enter Password" />
                    </div>
                    <div className="form-input">
                        <label>Re-Enter Password</label>
                        <input type="password" name="ConfirmPassword" placeholder="Re-Enter Password" />
                    </div>
                    <button className="form-btn">Register</button>
                </form>
            </div>


        </div>
    )
}

export default Signup;
