import React from 'react';
import Progress from '../Home/Progress/Progress';




const AboutUs = () => {
    return (
        <div className='container'>

            <div className='row p-4 mt-4' >
                <div className='col-lg-6 mt-5'>
                    <h1 style={{fontSize:'40px'}}>About us </h1> <br /><br />
                    <p>Our Investment Company, located in Rockville, Maryland, is a full service real estate company that provides acquisition, development and finance expertise for both commercial and multi-family projects.
                        Our experience in structuring complicated financial transactions while accommodating diverse partnership interests, has allowed it to achieve over $1 Billion in acquisitions and financing.</p> <br /> <br />

                    <div className='text-center'>
                        <h5 >Wealth Management

                        </h5 >
                        <Progress done="70" />
                        <h5>Business Owners

                        </h5>
                        <Progress done="60" />
                        <h5>Insurance & Annuities

                        </h5>
                        <Progress done="50" />
                        <h5>Cash & Credit

                        </h5>
                        <Progress done="40" />
                    </div>








                </div>
                <div className='col-lg-6'>
                    <img src="https://demo.hasthemes.com/koshrot-preview-v1/images/about-2-446x608.png" alt="girl image" />
                </div>
            </div>

        </div>
    );
};

export default AboutUs;