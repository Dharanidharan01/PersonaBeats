import React from 'react';
import { Link } from 'react-router-dom';
import bgVideo from '../assets/bg.mp4';  // Import the video file

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center relative">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
          .font-poppins {
            font-family: 'Poppins', sans-serif;
          }
          #bg-video {
            position: absolute;
            top: 0;
            left: 0;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            z-index: -1; /* Place behind other content */
            background-size: cover;
          }
          .content-container {
            /* Styling for your content */
            position: relative;
            z-index: 1; /* Ensure content is above the video */
          }
        `}
      </style>
      {/* Video element */}
      <video id="bg" autoPlay muted loop>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="content-container text-center mt-40 max-w-xl">
        <h1 className="text-4xl mt-0 font-bold mb-6 text-white font-poppins">
          Elevate Your Music Experience with PersonalBeats
        </h1>
        <p className="text-lg mb-8 text-gray-300 font-poppins">
          Discover a personalized approach to music streaming that adapts to your tastes and preferences.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/signup"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg text-lg focus:outline-none font-poppins"
          >
            Get Started
          </Link>
          <Link
            to="/features"
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-3 rounded-lg text-lg focus:outline-none font-poppins"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
