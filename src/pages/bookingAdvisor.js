// src/App.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import activity1 from '../assets/Destenation1.jpeg';
import activity2 from '../assets/Destenation2.jpeg';
import activity3 from '../assets/Destenation3.jpeg';
function BookingAdvisor() {
  const navigate =useNavigate();
  const navigation=()=>{
    navigate('/finish')
  }
  return (
    <div className="min-h-screen bg-gray-300 p-4 md:p-8 lg:p-12 bg-gray-200">
      <div className="max-w-screen-lg mx-auto bg-gray-200 p-4 md:p-6 lg:p-8 shadow-lg">
        <PageHeader />
        <Description />
        <AgencyImages />
        <BookingForm />
        <div className="text-center">
          <button className="bg-green-700 text-white py-2 px-8 rounded" onClick={navigation}>Confirm Booking</button>
        </div>
      </div>
    </div>
  );
}
export default BookingAdvisor;


const PageHeader = () => (
  <div className="text-center my-8">
    <h1 className="text-4xl font-bold text-green-700">Booking Advisor</h1>
  </div>
);

const Description = () => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-2">Description</h2>
    <div className="border-t border-gray-700 pt-2">
    <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet mauris eu fringilla hendrerit. Nam a mauris imperdiet, sagittis ipsum eleifend, accumsan diam. Phasellus sodales tortor ac condimentum interdum. In congue ultrices libero sit amet gravida. Praesent lacus turpis, aliquam quis molestie sed, laoreet eget libero. Quisque id nibh metus. Pellentesque congue volutpat risus vitae fermentum. Duis non magna in quam lacinia fermentum.
          </p>
    </div>
  </div>
);

const activities = [activity1, activity2, activity3];

const AgencyImages = () => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-2">Agency images</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {activities.map((activity, index) => (
        <img key={index} src={activity} alt={`Activity ${index + 1}`} className="w-32 h-32 object-cover" />
      ))}
    </div>
  </div>
);

const BookingForm = () => (
  <div className="mb-8 bg-white shadow-lg p-4 rounded-xl">
    <form className="space-y-4">
      <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
      <input type="text" placeholder="Phone Number" className="w-full p-2 border border-gray-300 rounded" />
      <input type="text" placeholder="ADT, CHD, INF" className="w-full p-2 border border-gray-300 rounded" />
    </form>
  </div>
);
