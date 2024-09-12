import React from "react";

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-0">
      {/* Introduction Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-5 text-white">About Me</h1>
        <p className="text-lg text-justify text-gray-300">
          Hello, I'm Abhishekh Kumar Kapar, a dedicated Cloud Computing student with a strong foundation in web development and a passion for creating dynamic, scalable solutions. I have hands-on experience working on various cloud-based projects, using technologies like AWS, Microsoft Azure, Docker, and Kubernetes, along with full-stack development skills.
        </p>
      </div>

      {/* Grid Layout for Other Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Education & Training */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen-400 shadow-lg rounded-lg p-6 border border-white hover:border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
          <h2 className="text-2xl font-semibold mb-4 text-white">Education & Training</h2>
          <ul className="list-disc pl-5 space-y-4 text-gray-500">
            <li className="flex justify-between items-center">
              Bachelors in Computer Science Engineering (Hons), Cloud Computing, Chandigarh University, 2025
            </li>
            <span className="text-gray-500 font-bold">CGPA: 8.41</span>
            <li className="flex justify-between items-center">
              Intermediate, Trinity International Secondary School, 2020
              <span className="text-gray-500 font-bold">Percentage: 93%</span>
            </li>
            <li className="flex justify-between items-center">
              Matriculation, Creative City Montessori School, 2017
              <span className="text-gray-500 font-bold">Percentage: 90%</span>
            </li>
          </ul>
        </div>

        {/* Skills & Expertise */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen-400 shadow-lg rounded-lg p-6 border border-white hover:border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
          <h2 className="text-2xl font-semibold mb-4 text-white">Skills & Expertise</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-500">
            <li>Proficient in: C, C++, Java, Python, HTML, CSS, JavaScript, Node.js, React.js, SQL, MongoDB</li>
            <li>Cloud technologies: AWS, Microsoft Azure, Docker, Kubernetes</li>
            <li>Strong problem-solving skills demonstrated through 300+ coding challenges on platforms like LeetCode</li>
          </ul>
        </div>

        {/* Professional Experience & Projects */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen-400 shadow-lg rounded-lg p-6 border border-white hover:border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
          <h2 className="text-2xl font-semibold mb-4 text-white">Professional Experience & Projects</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-500">
            <li>Developed a fully functional e-commerce website using React.js, Tailwind CSS, and Firebase as the backend with Custom Payment gateway integration</li>
            <li>Created a Cloud-Based File Management System with AWS S3 for scalable file storage</li>
            <li>Implemented Pose Estimation of Blur Image using Python and TensorFlow for augmented reality applications</li>
          </ul>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen-400 shadow-lg rounded-lg p-6 border border-white hover:border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
          <h2 className="text-2xl font-semibold mb-4 text-white">Certifications</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-500">
            <li>Cloud Security Fundamentals (Palo Alto Networks)</li>
            <li>AZ-104: Monitor and Backup Azure Resources (Microsoft Azure)</li>
            <li>AWS Cloud Technical Essentials (Coursera)</li>
            <li>The Web Developer Bootcamp 2024 (Udemy)</li>
          </ul>
        </div>

        {/* Academic and Extra-Curricular */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen-400 shadow-lg rounded-lg p-6 border border-white hover:border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
          <h2 className="text-2xl font-semibold mb-4 text-white">Academic and Extra-Curricular</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-500">
            <li>Maintained an 8 CGPA throughout each semester.</li>
            <li>Completed over 300+ challenges on LeetCode and other platforms, showcasing strong problem-solving skills.</li>
            <li>Developed skills in digital marketing, including social media campaign management and SEO optimization.</li>
          </ul>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen-400 shadow-lg rounded-lg p-6 border border-white hover:border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300 transform md:col-span-2 lg:col-span-3">
          <h2 className="text-2xl font-semibold mb-4 text-white">Mission Statement</h2>
          <p className="text-gray-500">
            My mission is to leverage my cloud computing expertise and web development skills to create innovative, secure, and scalable digital solutions. I am committed to continuous learning and am always looking for opportunities to challenge myself and grow in the field of technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
