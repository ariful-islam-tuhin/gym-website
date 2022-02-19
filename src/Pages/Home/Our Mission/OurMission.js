import React from 'react';
import './OurMission.css'

const OurMission = () => {
    return (
        <div  className='main-div'>
            <div className='row text-center'>
                <div className='col-lg-7 p-4'>
                    <h1 style={{fontSize:'40px',marginTop:"20px"}} className='p-4'>We Are Different</h1>              
                    <div className='single-heading'>
                    <h2>Economies of Scale</h2>
                    <p>When you buy shares you have to pay dealing costs and admin fees, which can eat away at the value of your investment.</p>
                    </div>
                   <div className='single-heading' >
                   <h2>A Way to Spread Your Risk</h2>
                    <p>Buying shares in only one investment company effectively gives you a diversified portfolio.</p>
                   </div>
                   <div className='single-heading '>
                   <h2>Manager’s Expertise</h2>
                    <p>Each investment company uses professional management expertise.</p>
                   </div>
                </div>
                <div className='col-lg-5 p-4  rounded'>
                <h1  style={{fontSize:'35px'}}  className='p-4'>Our Mission</h1>
                <video className='video p-1 mt-4 rounded' loop autoPlay muted>                          
                <source src="https://assets.mixkit.co/videos/preview/mixkit-girl-in-sportswear-stretching-her-body-outdoors-40749-large.mp4" />    
            </video> 
                </div>

            </div>
            
        </div>
    );
};

export default OurMission;