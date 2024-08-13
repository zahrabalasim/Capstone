import React from 'react';

const AboutUs = ({id}) => {
  return (
    <div id={id} className="bg-gray-100 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">
          About Us
        </h2>
        {/* Introduction */}
        <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
          We are a dedicated team of professionals committed to providing the best service in our industry. Our company values integrity, excellence, and teamwork. We strive to exceed expectations and deliver top-quality products and services to our clients.
        </p>

        {/* Core Values or Services */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900">Integrity</h3>
            <p className="mt-2 text-gray-600">
              We uphold the highest standards of integrity in all of our actions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900">Excellence</h3>
            <p className="mt-2 text-gray-600">
              We strive for excellence in everything we do and constantly seek to improve.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900">Teamwork</h3>
            <p className="mt-2 text-gray-600">
              We work together, across boundaries, to meet the needs of our customers and help our company win.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
