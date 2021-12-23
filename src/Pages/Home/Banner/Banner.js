import React from 'react';
import "./Banner.css";



const Banner = () => {

    return (
        <div className='video-div'>          
            <video className='video' loop autoPlay muted>               
                <source src="https://assets.mixkit.co/videos/preview/mixkit-girl-in-sportswear-stretching-her-body-outdoors-40749-large.mp4" />    
            </video>       
        </div>
    );
};

export default Banner;