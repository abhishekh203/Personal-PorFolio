import React from "react";
import pic from "../../public/ph.jpg";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Home() {
  return (
    <div
      name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-screen flex flex-col md:flex-row items-center justify-center"
    >
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full">
        {/* Image Section */}
        <img
          src={pic}
          alt="Abhishekh Kumar Kapar"
          className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] rounded-full shadow-lg mb-8 md:mb-0"
        />
        {/* Introduction Section */}
        <div className="text-center md:text-left md:ml-8 lg:ml-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Abhishekh Kumar Kapar
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            Specialization in Cloud Computing | Web Developer
          </p>
          <p className="text-gray-400 text-sm md:text-base mb-6 text-justify">
            I am a passionate student of Cloud Computing at Chandigarh University, with a strong background in web development. I specialize in building scalable and secure cloud-based solutions using cutting-edge technologies such as AWS, Microsoft Azure, Docker, Kubernetes, and full-stack development with React.js, Node.js, and MongoDB.
          </p>
          {/* Call to Action Buttons */}
          <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
            <Link
              to="/projects"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full md:w-auto text-center"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full md:w-auto text-center"
            >
              Contact Me
            </Link>
            <Link
              to="/contact-info"
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 w-full md:w-auto text-center"
            >
              My Details
            </Link>
            <a
              href="https://drive.google.com/file/d/1-AKtJELskO-5obiN6uNeNuBUrS-wdWky/view?usp=sharing" // Update this with the actual path or link to your resume
              download
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 w-full md:w-auto text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
