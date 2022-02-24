
import './Login.css';

import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa';





const Login = () => {
    const { signInUsingGoogle } = useAuth();

    return (
        <div  className='background'>

            <h1> <span style={{ color: 'red' }}>Gym</span> Center </h1>
            <h3>Please Login</h3>
            <br />
            <div style={{ width: '20%', margin: 'auto'}} className="form-group  ">
                <input
                    type="email"
                    name="email"
                    className="form-control"                    
                    placeholder="Email"
                />
            </div>
            <br />

            <div style={{ width: '20%', margin: 'auto',fontSize:'large' }} className="form-group ">
                <input
                    type="password"
                    name="password"
                    className="form-control"

                    placeholder="Password"
                />
            </div>
            <br />
            <div style={{ width: '20%', padding:'5px', margin: 'auto', backgroundColor:'red',fontSize:'large' }}>
                Login
            </div>



            <div className='login-div'>





                <div style={{ width: '400px', padding: '50px' }} >

                    <span onClick={signInUsingGoogle} > <FaGoogle style={{ color: 'red', fontSize: '30px' }} /> </span>
                    <span> <FaFacebookSquare style={{ fontSize: '30px', color: 'green' }} /> </span>
                    <br />
                    <br />

                    <Link to="/register">New User? cteate a new account</Link>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>

    );
};

export default Login;




// 
{/* <div className='row col-lg-12 login-form'>
            <h2>SignIn</h2>
            <div className='col-lg-6 col-md-12'>
                <p>Email</p>
                <input className='input p-2' type="text" />
                <p>password</p>
                <input  className=' input p-2' type="password" /><br /> <br />

                <button className='log-in m-3'>Lon In </button>


            </div>
            <div className='col-lg-6 col-md-12'>
                <div>
                    <button className='google-btn m-3 p-2 rounded' onClick={handleGoogleLogin}>
                        Login With Google
                    </button>
                    <button className='github-btn m-3 p-2 rounded' >
                        Login With Github
                    </button>
                    <button className='twiter-btn m-3 p-2 rounded' >
                        Login With twiter
                    </button>
                    <button className='facebook-btn m-3 p-2 rounded'>
                        Login With Facebook
                    </button>
                </div>
            </div>




        </div> */}
// 