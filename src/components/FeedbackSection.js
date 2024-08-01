// src/components/FeedbackSection.js
import React, { useState } from 'react';
import FeedbackModal from './FeedbackModal';

const FeedbackSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="py-10 px-4 bg-gray-200">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-4">
        <img
          src="https://picsum.photos/200/300?random=1" // Replace with your image URL
          alt="Feedback"
          className="bg-cover bg-center flex flex-col items-center py-8 bg-transparent"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Let’s build together!</h2>
          <p className="text-gray-700 mb-4">Tell us how we can make our website better for you</p>
          <button
            className="bg-green-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-800"
            onClick={() => setShowModal(true)}
          >
            Give us your Feedback!
          </button>
        </div>
      </div>
      <FeedbackModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default FeedbackSection;

