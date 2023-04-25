import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="py-4 flex flex-wrap justify-between items-center">
          <div className="text-sm text-gray-400 font-semibold">
            &copy; 2023 My Website Name. All Rights Reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Blog
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;