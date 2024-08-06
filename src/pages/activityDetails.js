// src/RecommendationPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Destination1 from '../assets/Destenation1.jpeg';
import Destination2 from '../assets/Destenation2.jpeg';
import Destination3 from '../assets/Destenation3.jpeg';

const RecommendationPage = () => {
  const navigate = useNavigate();
  const topActivities = [Destination1, Destination2, Destination3];
  const navigation = () => {
    console.log("clicket")
    navigate('/bookingAdvisor')
  }

  return (
    <div className="max-w-screen-lg mx-auto bg-gray-300 pt-16 px-4 md:px-6 lg:px-8">
      {/* Top Image */}
      <div className="mb-6">
        <img src={Destination1} alt="Main Image" className="w-full h-48 md:h-64 lg:h-80 object-cover" />
      </div>

      {/* Top Activities Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 px-2">Top activities</h2>
        <div className="flex flex-wrap space-x-4">
          {topActivities.map((activity, index) => (
            <img 
              key={index} 
              src={activity} 
              alt={`Activity ${index + 1}`} 
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover mb-4" 
            />
          ))}
        </div>
      </div>

      {/* Description Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 px-2">Description</h2>
        <div className="bg-gray-200 p-4 h-auto">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet mauris eu fringilla hendrerit. Nam a mauris imperdiet, sagittis ipsum eleifend, accumsan diam. Phasellus sodales tortor ac condimentum interdum. In congue ultrices libero sit amet gravida. Praesent lacus turpis, aliquam quis molestie sed, laoreet eget libero. Quisque id nibh metus. Pellentesque congue volutpat risus vitae fermentum. Duis non magna in quam lacinia fermentum.
          </p>
        </div>
      </div>

      {/* Recommendation Agencies Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-green-700 mb-4 text-center">Recommendation Agencies</h2>

        {/* Agency 1 */}
        <div className="mb-4 bg-white shadow-lg p-4">
          <img src={Destination2} alt="Agency 1" className="w-full h-40 md:h-48 lg:h-56 object-cover mb-2" />
          <button className="bg-green-700 text-white py-2 px-4 rounded" onClick={navigation}>Book Now</button>
        </div>

        {/* Agency 2 */}
        <div className="mb-4 bg-white shadow-lg p-4">
          <img src={Destination3} alt="Agency 2" className="w-full h-40 md:h-48 lg:h-56 object-cover mb-2" />
          <button className="bg-green-700 text-white py-2 px-4 rounded" onClick={navigation}>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default RecommendationPage;
