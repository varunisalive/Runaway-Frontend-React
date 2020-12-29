import React, { useState, useRef, useEffect } from 'react';
import AuthService from "../Services/AuthServices";
import Message from "../Components/Message";
import Navbar from "../Components/Header/Navbar";
import "./Signup.css";

function Signup(props) {

    const [user, setUser] = useState({ username: "", email: "", password: "", role: ""})
    const [message, setMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    const resetForm = () => {
        setUser({ username: "", email: "", password: "" , role: ""});
    }

    const onChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
        console.log(user);
    }

    const onSubmit = event => {
        event.preventDefault();

        AuthService.register(user).then(data => {
            const { message } = data;
            setMessage(message);
            resetForm();
            if (!message.msgError) {
                timerID = setTimeout(() => {
                    props.history.push('/login');
                }, 2000);
            }
        });
    }

    return (
        <div>
            <div className="nav">
                <Navbar />
            </div>
            <div className="container">
                <form className="form" onSubmit={onSubmit}>
                    <h2 className="heading">Sign Up</h2>
                    <div className="form-input">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Enter Username" onChange={onChange} />
                    </div>
                    <div className="form-input">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Enter Email" onChange={onChange} />
                    </div>
                    <div className="form-input">
                        <label>Role</label>
                        <input type="text" name="role" placeholder="Enter Role (admin/user)" onChange={onChange} />
                    </div>
                    <div className="form-input">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Enter Password" onChange={onChange} />
                    </div>
                    

                    <button className="form-btn">Register</button>
                </form>
                {message ? <Message message={message} /> : null}
            </div>


        </div>
    )
}

export default Signup;
