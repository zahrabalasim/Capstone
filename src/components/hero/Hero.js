import React from 'react';
import './HeroStyles.css';
import Video from '../../assets/Maldivas.gif';
import CardForm from '../cardform/CardForm'; 

function Hero() {
    return (
        <div className='hero'>
            <div className='overlay'></div>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="homeContent container">
                <div className='textDiv'>
                    <h1 className='homeTitle'>Your Journey Is Your Story</h1>
                    <span className='smallText'>Choose Your Favourite Destination</span>
                </div>
                <CardForm /> 
            </div>
        </div>
    );
}

export default Hero;
