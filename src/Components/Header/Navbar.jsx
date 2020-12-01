import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {

    const [menubar, setMenubar] = useState(false);

    return (
        
        <div className="navbar">
            <div className="title">
                <h1>Runaway</h1>
            </div>

            <div className="navbar-icon">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={() => setMenubar(!menubar)} />
                </Link>
            </div>

            <nav className={menubar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose onClick={() => setMenubar(!menubar)}/>
                            </Link>
                        </li>
                    <li className="nav-text">
                        
                        <Link to="#home">
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/Products">
                            Products
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/Contact-us">
                            Contact Us
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/About-us">
                            About Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>


    )
}

export default Navbar
