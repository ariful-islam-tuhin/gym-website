import React from 'react';
import { FaFacebookSquare, FaGoogle, FaTwitter, FaYahoo } from 'react-icons/fa';
import './OurTrainer.css'



const OurTrainer = () => {
    return (
        <div className='container p-4 mt-4'>
            <div className='row '>
                <div className='col-lg-3 border rounded'>
                    <img src="https://demo.hasthemes.com/koshrot-preview-v1/images/team-13-246x250.jpg" alt="" />
                    <h4>Amanda Smith</h4>
                    <p>Business Expert</p>
                   <span> <FaGoogle style={{ color: 'red', fontSize: '30px' }} /> </span>
                   <span><FaTwitter style={{ fontSize: '30px', color: 'blue' }}></FaTwitter></span> 
                    <span> <FaFacebookSquare style={{ fontSize: '30px', color: 'green' }} /> </span>
                    <span> <FaYahoo style={{ fontSize: '30px', color: 'green' }} /> </span>
               
                   
                </div>
                <div className='col-lg-3 border rounded'>
                    <img src="https://demo.hasthemes.com/koshrot-preview-v1/images/team-14-246x250.jpg" alt="" />
                    <h4>John Doe</h4>
                    <p>PR Manager</p>
                    <span> <FaGoogle style={{ color: 'red', fontSize: '30px' }} /> </span>
                   <span><FaTwitter style={{ fontSize: '30px', color: 'blue' }}></FaTwitter></span> 
                    <span> <FaFacebookSquare style={{ fontSize: '30px', color: 'green' }} /> </span>
                    <span> <FaYahoo style={{ fontSize: '30px', color: 'green' }} /> </span>
                </div>
                <div className='col-lg-3 border rounded '>
                    <img src="https://demo.hasthemes.com/koshrot-preview-v1/images/team-16-246x250.jpg" alt="" />
                    <h4>David Nicholson</h4>
                    <p>Senior HR Manager</p>
                    <span> <FaGoogle style={{ color: 'red', fontSize: '30px' }} /> </span>
                   <span><FaTwitter style={{ fontSize: '30px', color: 'blue' }}></FaTwitter></span> 
                    <span> <FaFacebookSquare style={{ fontSize: '30px', color: 'green' }} /> </span>
                    <span> <FaYahoo style={{ fontSize: '30px', color: 'green' }} /> </span>
                </div>
                <div className='col-lg-3 border rounded'>
                    <img src="https://demo.hasthemes.com/koshrot-preview-v1/images/team-15-246x250.jpg" alt="" />
                    <h4 >Vanessa Ives</h4>
                    <p>Marketing Expert</p>
                    <span> <FaGoogle style={{ color: 'red', fontSize: '30px' }} /> </span>
                   <span><FaTwitter style={{ fontSize: '30px', color: 'blue' }}></FaTwitter></span> 
                    <span> <FaFacebookSquare style={{ fontSize: '30px', color: 'green' }} /> </span>
                    <span> <FaYahoo style={{ fontSize: '30px', color: 'green' }} /> </span>
                </div>

            </div>

        </div>
    );
};

export default OurTrainer;