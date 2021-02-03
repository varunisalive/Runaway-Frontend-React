import React, { useContext, useState } from 'react';
import AuthService from "../Services/AuthServices";
import { AuthContext } from "../Context/AuthContext";
import Message from "../Components/Message";
import Navbar from "../Components/Header/Navbar";
import "./Signup.css";

function Login(props) {

    const [user, setUser] = useState({ username: "", password: "" })
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const onSubmit = event => {
        event.preventDefault();

        AuthService.login(user).then(data => {
            const { isAuthenticated, user, message } = data;
            if (isAuthenticated) {
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/')
            } else {
                setMessage(message);
            }
        })

    }

    return (
        <div>
            <div className="nav">
                <Navbar />
            </div>
            <div className="container">
                <form className="form" onSubmit={onSubmit}>
                    <h2 className="heading">Login</h2>
                    <div className="form-input-div">
                        <label>Username</label>
                        <input className="form-input" type="text" name="username" onChange={onChange} placeholder="Enter Username" />
                    </div>
                    <div className="form-input-div">
                        <label>Password</label>
                        <input className="form-input" type="password" name="password" onChange={onChange} placeholder="Enter Password" />
                    </div>
                    <button className="form-btn">Login</button>
                </form>
                {message ? <Message message={message} /> : null}
            </div>


        </div>
    )
}

export default Login;
