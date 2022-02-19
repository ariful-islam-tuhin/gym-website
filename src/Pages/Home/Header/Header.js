
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./Header.css";

const Header = () => {

    const { user, logout } = useAuth();
    const activeStyle = { fontWeight: "bold", color: "white" };
    // const activeStyle = {
    //     fontWeight: "bold",
    //     color: "white",
    // };
    // const { user, logOut } = useAuth();
    // const { user, logOut } = useAuth();

    return (
        <div>
            {/* <i class="fas fa-camera"></i> */}
            <nav className="navbar navbar-expand-sm navbar-dark">
                <Link activeStyle={activeStyle} to="/" className="text-white"> {" "} Fitness Gym  {" "} </Link>
                <div className="navbar-nav  ms-auto">

                    <Link activeStyle={activeStyle} className="NavLink" to="/home" > {" "} Home  {" "}  </Link>
                    <Link activeStyle={activeStyle} className="NavLink" to="/services" > {" "} Services  {" "}  </Link>
                    <Link activeStyle={activeStyle} className="NavLink" to="/aboutus" > {" "} About Us  {" "}  </Link>
                    <Link activeStyle={activeStyle} className="NavLink" to="/contactus" > {" "} Contact Us  {" "}  </Link>
                    <Link activeStyle={activeStyle} className="NavLink" to="/login" > {" "} Login  {" "}  </Link>
                 


                    {/* <span>{user.displayName} </span> */}
                    {user?.email && <button className='logout-button' onClick={logout}> Logout </button>}
                    
                   

                    {/* {user.email ? (
                        <span onClick={logOut}>
                            Log out
                        </span>
                    ) : (
                        <>
                            <NavLink className="NavLink" to="/login" activeStyle={activeStyle}>
                                Login
                            </NavLink>
                          
                        </>
                    )} */}


                </div>
            </nav>
        </div>
    );
};

export default Header;