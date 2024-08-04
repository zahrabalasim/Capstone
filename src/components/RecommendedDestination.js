// src/components/RecommendedDestinations.js
import React from 'react';

const destinations = [
  {
    imgSrc: 'https://media-cdn.holidaycheck.com/w_768,h_432,c_fill,q_auto,f_auto/ugc/images/03699e06-8d70-4181-81d9-9d21bdddf97e',
    title: 'Maldives',
  },
  {
    imgSrc: 'https://cdn-imgix.headout.com/media/images/c1b3d2ea0dec8ae016c56d0d13691b1c-This%20is%20a%20Photograph%20of%20Galata%20Tower.jpg',
    title: 'Galata Tower, Istanbul',
  },
  {
    imgSrc: 'https://media.cntraveller.com/photos/611be916628f4910ed101d18/16:9/w_2580%2Cc_limit/parque-del-buen-retiro-gettyimages-873841648.jpg',
    title: 'Parque del Buen Retiro, Madrid',
  },
  {
    imgSrc: 'https://thetourguy.com/wp-content/uploads/2022/01/Cibeles-fountain-in-front-of-Palaza-Cibeles-madrid-1440-x-675-900x420.jpg',
    title: 'Cibeles Fountain, Madrid',
  },
  {
    imgSrc: 'https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg',
    title: 'Eiffel Tower, Paris',
  },
  {
    imgSrc: 'https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg',
    title: 'Amalfi Coast, Italy',
  },

// 'https://media-cdn.holidaycheck.com/w_768,h_432,c_fill,q_auto,f_auto/ugc/images/03699e06-8d70-4181-81d9-9d21bdddf97e',
// 'https://cdn-imgix.headout.com/media/images/c1b3d2ea0dec8ae016c56d0d13691b1c-This%20is%20a%20Photograph%20of%20Galata%20Tower.jpg',

  


];

const RecommendedDestinations = () => {
  return (
    <div className="flex flex-col items-center p-10 bg-transparent">
      <h2 className="text-3xl font-bold text-green-800 mb-8">Recommended Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
        {destinations.map((url, index) => (
          <div key={index} className="p-2 flex flex-col justify-center items-center">
            <img src={url.imgSrc} alt={`Destination ${index}`} className="w-full h-64 object-cover rounded-md shadow-md" />
           < h2 className="text-xl font-bold text-black mb-8">{url.title}</h2>
          </div>
        ))}
         </div>
    </div>
  );
};

export default RecommendedDestinations;
