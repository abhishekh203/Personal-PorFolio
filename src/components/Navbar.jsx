import React, { useState } from "react";
import pic from "../../public/photo.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll"; // Renamed Link to avoid conflict with react-router-dom
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navLink: {
    '&:hover': {
      textDecoration: 'underline',
      color: '#FFEB3B', // Yellow color for hover
      transform: 'scale(1.05)',
      transition: 'all 0.3s ease',
    },
  },
});

function Navbar() {
  const [menu, setMenu] = useState(false);
  const classes = useStyles();
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Skill" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-black to-gray-800">
      <div className="flex justify-between items-center h-full">
        <div className="flex space-x-2 items-center">
          <img src={pic} className="h-12 w-12 rounded-full border-2 border-gray-400 shadow-lg" alt="Profile" />
          <div>
            <h1 className="font-semibold text-2xl cursor-pointer text-white">
              Abhishekh<span className="text-yellow-400 text-3xl"></span>
            </h1>
            <p className="text-sm text-gray-200">Cloud Computing Student</p>
          </div>
        </div>
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(({ id, text }) => (
            <Button
              key={id}
              className={`${classes.navLink} text-white font-semibold hover:text-yellow-500`}
            >
              <ScrollLink
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                spy={true} // Add spy to highlight active link
              >
                {text}
              </ScrollLink>
            </Button>
          ))}
          <Button className="text-white font-semibold hover:text-yellow-500">
            CGPA: 8.41
          </Button>
        </div>
        {/* Mobile Navbar */}
        <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
          {menu ? <IoCloseSharp size={24} className="text-white hover:text-yellow-400" /> : <AiOutlineMenu size={24} className="text-white hover:text-yellow-400" />}
        </div>
      </div>
      {menu && (
        <div className="fixed top-16 left-0 right-0 bg-gradient-to-r from-gray-900 via-black to-gray-800 shadow-lg">
          <ul className="flex flex-col items-center space-y-3 text-xl p-4">
            {navItems.map(({ id, text }) => (
              <li key={id} className="w-full text-center">
                <Button
                  className={`${classes.navLink} text-white font-semibold hover:text-yellow-500`}
                  onClick={() => setMenu(false)}
                >
                  <ScrollLink
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    spy={true}
                  >
                    {text}
                  </ScrollLink>
                </Button>
              </li>
            ))}
            <li className="w-full text-center">
              <Button className="text-white font-semibold hover:text-yellow-500">
                CGPA: 8.41
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
