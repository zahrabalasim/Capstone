import React from "react";
import { useNavigate } from "react-router-dom";




export default function ResultsPage() {
const navigate = useNavigate();

const navigation = () => {
  console.log("clicket")
  navigate('/activityDetails')
}


  const Destinations = [
    {
      destination: 'https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg',
      destinationName: "Maldives"
    },
    {
      destination: 'https://wallpapercave.com/wp/wp3386769.jpg',
      destinationName: "Paris"
    },
    {
      destination: 'https://wallpaperaccess.com/full/809523.jpg',
      destinationName: "New York"
    },
    {
      destination: 'https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg',
      destinationName: "Dubai"
    },


  ]
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-400 pt-12">
      <h1 className="text-3xl font-semibold my-2">Here the top places you search for</h1>

      {Destinations.map((destination, index) => (
        <Card destination={destination.destination} destinationName={destination.destinationName} navigate={navigation}/>

      ))}

    </div>
  )
}

const Card = ({ destination, destinationName,navigate }) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-lg rounded overflow-hidden shadow my-1" onClick={navigate}>
      <div className="text-center font-bold text-xl mb-2 text-white">{destinationName}</div>
      <img className="w-full" src={destination} alt="Sunset in the mountains" />
    </div>
  );
};

