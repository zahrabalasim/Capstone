// import React from "react";
// import { useNavigate } from "react-router-dom";




// export default function ResultsPage() {
// const navigate = useNavigate();

// const navigation = () => {
//   console.log("clicket")
//   navigate('/activityDetails')
// }


//   const Destinations = [
//     {
//       destination: 'https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg',
//       destinationName: "Maldives"
//     },
//     {
//       destination: 'https://wallpapercave.com/wp/wp3386769.jpg',
//       destinationName: "Paris"
//     },
//     {
//       destination: 'https://wallpaperaccess.com/full/809523.jpg',
//       destinationName: "New York"
//     },
//     {
//       destination: 'https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg',
//       destinationName: "Dubai"
//     },


//   ]
//   return (
//     <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-400 pt-12">
//       <h1 className="text-3xl font-semibold my-2">Here the top places you search for</h1>

//       {Destinations.map((destination, index) => (
//         <Card destination={destination.destination} destinationName={destination.destinationName} navigate={navigation}/>

//       ))}

//     </div>
//   )
// }

// const Card = ({ destination, destinationName,navigate }) => {
//   return (
//     <div className="flex flex-col justify-center items-center max-w-lg rounded overflow-hidden shadow my-1" onClick={navigate}>
//       <div className="text-center font-bold text-xl mb-2 text-white">{destinationName}</div>
//       <img className="w-full" src={destination} alt="Sunset in the mountains" />
//     </div>
//   );
// };

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ResultsPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { destination, activity } = location.state || {};

    const Destinations = [
        {
            activity: 'Historical Tours',
            destination: 'https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg',
            destinationName: "Maldives"
        },
        {
            activity: 'Relaxation Tours',
            destination: 'https://wallpapercave.com/wp/wp3386769.jpg',
            destinationName: "Paris"
        },
        {
            activity: 'Shopping Tours',
            destination: 'https://wallpaperaccess.com/full/809523.jpg',
            destinationName: "New York"
        },
        {
            activity: 'Adventure Tours',
            destination: 'https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg',
            destinationName: "Dubai"
        },
    ];

    // Filter destinations based on activity and destination
    const filteredDestinations = Destinations.filter(d => 
        d.activity === activity && d.destinationName.toLowerCase().includes(destination.toLowerCase())
    );

    // If no matches found
    if (filteredDestinations.length === 0) {
        return (
            <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-400 pt-12">
                <h1 className="text-3xl font-semibold my-2">Coming Soon</h1>
                <p>We are working hard to add more destinations for this activity. Stay tuned!</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-400 pt-12">
            <h1 className="text-3xl font-semibold my-2">Here are the top places you searched for</h1>

            {filteredDestinations.map((destination, index) => (
                <Card 
                    key={index}
                    destination={destination.destination} 
                    destinationName={destination.destinationName} 
                    navigate={() => navigate('/activityDetails')}
                />
            ))}

        </div>
    );
}

const Card = ({ destination, destinationName, navigate }) => {
    return (
        <div className="flex flex-col justify-center items-center max-w-lg rounded overflow-hidden shadow my-1" onClick={navigate}>
            <div className="text-center font-bold text-xl mb-2 text-white">{destinationName}</div>
            <img className="w-full" src={destination} alt="Sunset in the mountains" />
        </div>
    );
};
