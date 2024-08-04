import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const FeedbackModal = ({ showModal, setShowModal }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Feedback submitted");
    setShowModal(false);
    setShowAlert(true);
  };

  return (
    <>
      {showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-96 p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Give us a feedback</h2>
              <button onClick={() => setShowModal(false)}>
                <AiOutlineClose size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="mt-4">
              <p className="text-gray-600 mb-4">
                How was your experience? We appreciate any idea, bug report, or positive feedback!
              </p>
              <textarea
                className="w-full border rounded-md p-2 mb-4"
                placeholder="Message"
                rows="4"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-2 rounded-md"
              >
                Give us a feedback
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {showAlert ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-96 p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Thank you!</h2>
            <p className="text-gray-600 mb-4">Your feedback has been submitted successfully.</p>
            <button
              onClick={() => setShowAlert(false)}
              className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FeedbackModal;
