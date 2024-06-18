import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-6 mt-auto">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <p>&copy; 2024 MeloSphere. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-300">
            Twitter
          </a>
          <a href="#" className="hover:text-gray-300">
            Instagram
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
