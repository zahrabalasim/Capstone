import React from 'react';
import { useNavigate } from 'react-router-dom';
import FinishPicture from '../assets/Maldivas.gif';

export default function Finish() {
  const navigate = useNavigate();

  const navigation = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-400">
      <img className="w-1/2 h-auto" src={FinishPicture} alt="Finish" />
      <button className="bg-green-700 text-white py-2 px-8 rounded mt-2 w-1/2" onClick={navigation}>
        Home Page
      </button>
    </div>
  );
}
