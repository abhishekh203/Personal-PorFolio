import React from "react";

function Projects() {
  const projects = [
    {
      id: 1,
      logo: "../ecom.jpg", // E-commerce icon
      name: "Digital Sewa Nepal",
      description:
        "Developed a fully functional e-commerce platform using React.js and Tailwind CSS, incorporating Firebase for database management and authentication. Seamlessly managed product listings and additions, and integrated a custom payment gateway to facilitate secure transactions.",
      link: "https://digitalsewanepal.netlify.app/", // Project link
    },
    {
      id: 2,
      logo: "../folder.png", // File management icon
      name: "Cloud-Based File Management System",
      description:
        "Created a cloud-based file management system with AWS S3 for scalable file storage. Integrated secure file uploads, downloads, and management using Node.js and React.js.",
      link: "https://github.com/abhishekh203/cloud-file-management", // Project link
    },
    {
      id: 3,
      logo: "../pose.jpg", // Pose estimation icon
      name: "Pose Estimation of Blur Image",
      description:
        "Implemented pose estimation using Python, TensorFlow, and OpenCV to determine the orientation of objects and faces, applied in augmented reality and human-computer interaction.",
      link: "https://github.com/abhishekh203/pose-estimation-of-blur-image", // Project link
    },
    {
      id: 4,
      logo: "../portfolio.jpg", // Portfolio icon
      name: "Personal Portfolio",
      description:
        "Developed a personal portfolio website using React.js and Tailwind CSS. Includes sections for skills, projects, and contact information, showcasing all my work and expertise.",
      link: "https://abhishekhkapar.netlify.app/", // Project link
    },
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
          {projects.map(({ id, logo, name, description, link }) => (
            <div
              className="border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300 flex flex-col items-center"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div className="px-2 text-center">
                <h2 className="font-bold text-xl mb-2">{name}</h2>
                <p className="text-gray-500">{description}</p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around mt-4 text-center">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
