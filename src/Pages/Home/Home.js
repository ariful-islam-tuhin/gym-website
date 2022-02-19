import React from 'react';
import AboutUs from '../About us/AboutUs';
import Banner from './Banner/Banner';
import OurMission from './Our Mission/OurMission';
import OurTrainer from './Our Trainer/OurTrainer';
import Services from './Services/Services';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <OurMission></OurMission>
             <OurTrainer></OurTrainer>




        </div>
    );
};

export default Home;