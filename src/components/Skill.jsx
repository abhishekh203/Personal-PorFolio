import React from "react";

function Skill() {
  const cardItem = [
    { id: 1, logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png", name: "HTML" },
    { id: 2, logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png", name: "CSS" },
    { id: 3, logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png", name: "Java" },
    { id: 4, logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", name: "JavaScript" },
    { id: 5, logo: "../web.png", name: "AWS" },
    { id: 6, logo: "../docker.png", name: "Docker" },
    { id: 7, logo: "../dock.png", name: "Kubernetes" },
    { id: 8, logo: "../c.png", name: "C" },
    { id: 9, logo: "../cp.png", name: "C++" },
    { id: 10, logo: "../csharp.png", name: "C#" },
    { id: 11, logo: "../python.png", name: "Python" },
    { id: 12, logo: "../nod.png", name: "Node.js" },
    { id: 13, logo: "../react.png", name: "React" },
    { id: 14, logo: "../sq.png", name: "SQL" },
    { id: 15, logo: "../oracle.png", name: "MongoDB" },
    { id: 16, logo: "../azure.png", name: "Microsoft Azure" },
    { id: 17, logo: "../canva.png", name: "Canva" },
    { id: 18, logo: "../heri.png", name: "Data Structures & Algorithms" }
  ];

  return (
    <div
      name="Skill"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center text-white">Technical Skills</h1>
        <p className="text-center mb-8 text-gray-600">
          Here are some of the technologies and tools I'm proficient in:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black-min-h-screen text-white border-2 border-blue-200 rounded-lg shadow-md p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:from-blue-200 hover:to-blue-400"
              key={id}
            >
              <img src={logo} className="w-16 h-16 mb-2" alt={name} />
              <div className="text-center text-lg font-medium">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
