import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    
    return (
        <div className='background pt-4'>
            <h2>Please Register</h2>
            <form >
                <input style={{ width: '20%', margin: 'auto', padding:'5px'}} type="email" placeholder='EMAIL' />
                <br />               
                <input style={{ width: '20%', margin: 'auto', padding:'5px'}} type="password" placeholder='PASSWORD' />
                <br />
                <br />
                <br />
                <input style={{ width: '20%', margin: 'auto', padding:'5px',backgroundColor:'red',fontSize:'mediUm'}} type="submit" value="Submit" />
            </form>
            <br />
            <Link to="/login">Already Registered?</Link>
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
            <br />
            <br />
            <br />
            <br />
            <br />
         
        </div>
    );
};

export default Register;