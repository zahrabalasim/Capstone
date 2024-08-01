import React from 'react';
import Video from '../../assets/Maldivas.gif';
import CardForm from '../cardform/CardForm'; // Make sure the import path matches the correct file path

function Hero() {
    return (
        <div className="relative flex items-center justify-center w-full h-screen text-white overflow-hidden">
            <div className="absolute top-0 bottom-0 w-full h-full z-10 bg-orange-200 mix-blend-hard-light"></div>
            <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
                <source src={Video} type="video/mp4" />
            </video>
            <div className="absolute top-16 left-0 flex flex-col items-center justify-center w-full h-auto p-8 pt-32 pb-12 bg-black bg-opacity-50 text-center z-20 space-y-12">
                <div className="space-y-8">
                    <h1 className="relative text-3xl md:text-4xl lg:text-5xl">Your Journey Is Your Story</h1>
                    <span className="text-xs uppercase md:text-sm">Choose Your Favourite Destination</span>
                </div>
                <CardForm />
            </div>
        </div>
    );
}

export default Hero;

