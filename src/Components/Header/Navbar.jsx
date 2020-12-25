import React from 'react';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { Spring, animated } from 'react-spring/renderprops';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const menuItems = [
    {
        title: "Home",
        path: "/",
        cName: "nav-text"
    },
    {
        title: "Products",
        path: "/products",
        cName: "nav-text"
    },
    {
        title: "About Us",
        path: "/about-us",
        cName: "nav-text"
    },
    {
        title: "Contact Us",
        path: "/contact-us",
        cName: "nav-text"
    },
    {
        title: "Cart",
        path: "/cart",
        cName: "nav-text"
    }
]

class Navbar extends React.Component {

    state = {
        toggle: false,
        data: menuItems
    };

    onToggle = () => this.setState(state => ({ toggle: !state.toggle }))

    render() {
        const { toggle, data } = this.state
        return (

            <div className="navbar">
                <div className="title">
                    <h1>Runaway</h1>
                </div>

                <div className="navbar-icon">
                    <Link to="" className="menu-bars">
                        <FaIcons.FaBars onClick={this.onToggle} />
                    </Link>
                </div>

                

                <Spring
                    native
                    force
                    config={{ tension: 9000, friction: 1000, precision: 1 }}
                    from={{ height: toggle ? 0 : 'auto' }}
                    to={{ height: toggle ? 'auto' : 0 }}>
                    {props => (


                        <animated.nav style={props} className="nav-menu">

                            <ul className="nav-menu-items">

                                {data.map((item, index) => {
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link to={item.path}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    )
                                })}


                            </ul>
                        </animated.nav>
                        
                    )}
                </Spring>
                
               
            </div>

        )
    }

}

export default Navbar;