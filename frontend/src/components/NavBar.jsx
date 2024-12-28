import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [nav, setNav] = useState(false); // State to toggle navbar
  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Skills" },
    { id: 4, link: "Contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-16 px-4 bg-gray-900 text-white fixed top-0 z-10">
      {/* Logo */}
      <div>
        <h1 className="text-4xl font-bold font-signature">Dinesh</h1>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 hover:text-gray-500 capitalize font-medium duration-200 cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-20 text-gray-500 md:hidden"
      >
        {nav ? (
          <FontAwesomeIcon icon={faTimes} size="2x" /> // Close Icon
        ) : (
          <FontAwesomeIcon icon={faBars} size="2x" /> // Hamburger Icon
        )}
      </div>

      {/* Mobile Navigation Links */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-16 left-0 w-full h-screen bg-gray-800 text-white md:hidden">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 text-2xl capitalize cursor-pointer hover:text-gray-500"
              onClick={() => setNav(false)} // Close nav on click
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
