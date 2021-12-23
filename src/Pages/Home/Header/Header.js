import React from 'react';
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "white",
    };
    return (

        <div>
          <i class="fas fa-camera"></i>

            <nav className="navbar navbar-expand-sm navbar-dark">
                <Link to="/" className="text-white">

                    Fitness Gym
                </Link>
                <div className="navbar-nav  ms-auto">
                    <NavLink className="NavLink" to="/home" activeStyle={activeStyle}>
                        Home
                    </NavLink>
                    <NavLink className="NavLink" to="/services" activeStyle={activeStyle}>
                      Services
                    </NavLink>
                
                    <NavLink className="NavLink" to="/aboutus" activeStyle={activeStyle}>
                        About Us
                    </NavLink>
                    <NavLink className="NavLink" to="/contactus" activeStyle={activeStyle}>
                        Contact Us
                    </NavLink>

                </div>
            </nav>
        </div>
    );
};

export default Header;