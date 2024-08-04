import React from "react";
import Destenation1 from "./assets/Destenation1.jpeg"



export default function ResultsPage() {
  return (
    <Card />
  )
}

const Card = () => {
    return (
      <div className="flex justify-center items-center max-w-sm rounded overflow-hidden shadow">
        <img className="w-full " src={Destenation1} alt="Sunset in the mountains" />
      </div>
    );
  };
  
