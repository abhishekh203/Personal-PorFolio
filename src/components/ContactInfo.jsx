import React from "react";
import { Link } from "react-router-dom";

function ContactInfo() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Contact Information</h1>
      <div className="flex flex-col items-center text-center">
        <p className="text-lg mb-2">
          Chandigarh University, Gharuan, Mohali, Punjab
        </p>
        <p className="text-lg mb-2">
          6280105252
        </p>
        <p className="text-lg mb-2">
          <a href="mailto:abhishekhkapar@gmail.com" className="text-blue-500 hover:underline">
            abhishekhkapar@gmail.com
          </a>
        </p>
        <p className="text-lg mb-2">
          <a href="https://www.linkedin.com/in/abhishekh-kumar-kapar/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            LinkedIn Profile
          </a>
        </p>
        <p className="text-lg mb-2">
          <a href="https://github.com/abhishekh203" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            GitHub Profile
          </a>
        </p>
        <p className="text-lg mb-2">CGPA: 8.41</p>
        <div className="mt-4">
          <a href="https://t.me/Abhishekh21BCS3691" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mr-4">
            Telegram
          </a>
          <a href="https://wa.me/+916280105252" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            WhatsApp
          </a>
        </div>
        
        <div className="mt-4">
          <Link
            to="/"
            className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 "
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
