import React, { useState } from 'react';
import FeedbackModal from './FeedbackModal';

const FeedbackSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="py-10 px-4 bg-gray-200 flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex justify-center md:w-1/2">
          <img
            src="https://unblast.com/wp-content/uploads/2020/10/Feedback-Vector-Illustration.jpg" // Replace with your image URL
            alt="Feedback"
            className="w-full h-64 object-cover rounded-md shadow-md md:w-1/2"
          />
        </div>
        <div className="text-center md:text-left md:w-1/2">
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
