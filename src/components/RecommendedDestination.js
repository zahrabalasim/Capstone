// src/components/RecommendedDestinations.js
import React from 'react';

const destinations = [
'https://media-cdn.holidaycheck.com/w_768,h_432,c_fill,q_auto,f_auto/ugc/images/03699e06-8d70-4181-81d9-9d21bdddf97e',
'https://cdn-imgix.headout.com/media/images/c1b3d2ea0dec8ae016c56d0d13691b1c-This%20is%20a%20Photograph%20of%20Galata%20Tower.jpg',
'https://media.cntraveller.com/photos/611be916628f4910ed101d18/16:9/w_2580%2Cc_limit/parque-del-buen-retiro-gettyimages-873841648.jpg',
'https://thetourguy.com/wp-content/uploads/2022/01/Cibeles-fountain-in-front-of-Palaza-Cibeles-madrid-1440-x-675-900x420.jpg',
  'https://picsum.photos/200/300?random=5',
  'https://picsum.photos/200/300?random=6',
  'https://picsum.photos/200/300?random=7',
  'https://picsum.photos/200/300?random=8',

];

const RecommendedDestinations = () => {
  return (
    <div className="flex flex-col items-center py-8 bg-transparent">
      <h2 className="text-3xl font-bold text-green-800 mb-8">Recommended Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {destinations.map((url, index) => (
          <div key={index} className="p-2">
            <img src={url} alt={`Destination ${index}`} className="w-full h-auto rounded-md shadow-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedDestinations;
