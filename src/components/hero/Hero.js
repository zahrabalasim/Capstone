import React,{useState} from 'react';

import maldives from '../../assets/maldives.gif';
import CardForm from '../cardform/CardForm'; 


function Hero() {
    const [isResult,setIsResult]= useState(false)
    return (
        <div className="relative flex items-center justify-center w-full h-screen text-white overflow-hidden">
           
            <img src={maldives} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
            <div className="absolute top-16 left-0 flex flex-col items-center justify-center w-full h-auto p-8 pt-32 pb-12 text-center z-20 space-y-12 ">
                <div className="space-y-8">
                    <h1 className="relative text-3xl md:text-4xl lg:text-5xl  p-4ç rounded-lg">Your Journey Is Your Story</h1>
                    <span className="text-xs uppercase md:text-sm">Choose Your Favourite Destination</span>
                </div>
                <CardForm />
            </div>
            
        </div>
    );
}

export default Hero;
