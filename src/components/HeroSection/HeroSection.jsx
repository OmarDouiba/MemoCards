import React from 'react';

function HeroSection() {
  return (
    <section className="bg-gray-100 py-20 flex justify-center items-center text-center">
      <div>
        <h2 className="text-4xl font-bold text-gray-800">
          Unlock your learning potential
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Join thousands of learners today!
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg">
          Start Learning
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
