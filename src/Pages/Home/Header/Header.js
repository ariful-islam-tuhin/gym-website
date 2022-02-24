
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./Header.css";

const Header = () => {

    const { user, logOut } = useAuth();

    const activeStyle = {
        fontWeight: "bold",
        color: "white",
        
      };
  

    return (
        <div>
           
            <nav className="navbar navbar-expand-sm navbar-dark">
                <Link activeStyle={activeStyle} to="/" className="text-white"> {" "} Fitness Gym  {" "} </Link>
                <div className="navbar-nav  ms-auto">

                    <NavLink activeStyle={ activeStyle} className="NavLink" to="/home" > {" "} Home  {" "}  </NavLink>
                    <NavLink activeStyle={ activeStyle} className="NavLink" to="/services" > {" "} Services  {" "}  </NavLink>
                    <NavLink  activeStyle={ activeStyle} className="NavLink" to="/aboutus" > {" "} About Us  {" "}  </NavLink>
                    <NavLink activeStyle={ activeStyle} className="NavLink" to="/contactus" > {" "} Contact Us  {" "}  </NavLink>
                    
                 



                    {user.email ?(
                    <Button className='logout-button' onClick={logOut}> Logout </Button>)
                    :(
                    <Link activeStyle={activeStyle} className="NavLink" to="/login" >  Login   </Link>
                    )}
                    <Button className='bg-primary'> signin as {user?.displayName } </Button>
            
                    
                   

                   


                </div>
            </nav>
        </div>
    );
};

export default Header;