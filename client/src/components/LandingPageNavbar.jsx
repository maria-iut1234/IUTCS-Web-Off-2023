import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/IUTCS_logo_transparent_light.png";
import { FiLogOut } from "react-icons/fi";

const LandingPageNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass =
    "py-4 lg:mx-8 lg:py-0 relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FCCD0D] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center hover:text-[#FCCD0D]";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="shadow-md border-gray-100 drop-shadow-xl z-10"
      style={{ boxShadow: "0px 0px 20px rgba(252, 205, 13, 0.5)" }}
    >
      
      <nav className="flex justify-between bg-black text-white w-full">
        <div className="px-5 xl:px-12 py-4 flex w-full items-center">
          <ul
            className={`lg:flex px-4 mx-auto font-semibold font-heading ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <Link to="/home" className={`${linkClass}`}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/blogs" className={`${linkClass}`}>
                Blogs
              </Link>
            </li>

            <li>
              <Link to="/competitions" className={`${linkClass}`}>
                Competitions
              </Link>
            </li>

            <li>
              <Link to="/executives" className={`${linkClass}`}>
                Executives
              </Link>
            </li>

            <li>
              <Link to="/aboutus" className={`${linkClass}`}>
                About Us
              </Link>
            </li>

            
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            className=" w-10 h-10 text-sm text-white hover:text-[#FCCD0D]"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LandingPageNavbar;
