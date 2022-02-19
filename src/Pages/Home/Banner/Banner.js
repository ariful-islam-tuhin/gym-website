import React from 'react';
import "./Banner.css";



const Banner = () => {

    return (
        <div className='video-div'>          
            <video className='video' loop autoPlay muted>
                                   
                <source src="https://player.vimeo.com/external/440348637.sd.mp4?s=c99e9a5cc652ded4bd5f18195a1a3f0243c2192f&profile_id=165&oauth2_token_id=57447761" />    
            </video>  
           
            {/* <video className='video' loop autoPlay muted>                          
                <source src="https://assets.mixkit.co/videos/preview/mixkit-girl-in-sportswear-stretching-her-body-outdoors-40749-large.mp4" />    
            </video>   */}
              
        </div>
        
    );
};

export default Banner;