import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/IUTCS_logo_transparent_light.png";
import { FiLogOut } from "react-icons/fi";

const AdminNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass =
    "py-4 lg:mx-8 lg:py-0 relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#02E1DC] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center hover:text-[#02E1DC]";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="shadow-md border-gray-100 drop-shadow-xl z-10"
      style={{ boxShadow: "0px 0px 20px rgba(2, 225, 220, 0.5)" }}
    >
      <div className="max-w-xs mx-auto px-4 sm:px-6">
        <div className="flex flex-col-reverse md:flex-row min-w-full py-6 space-y-8 justify-center md:justify-between md:space-x-10">
          <Link to="/" className="flex-1 md:self-start">
            <div className="flex justify-center max-h-md">
              <div className="flex justify-center items-center ">
                <img src={logo} alt="Logo" className="" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <nav className="flex justify-between bg-black text-white w-full">
        <div className="px-5 xl:px-12 py-4 flex w-full items-center">
          <ul
            className={`lg:flex px-4 mx-auto font-semibold font-heading ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <Link to="/admin/home" className={`${linkClass}`}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/admin/blogs" className={`${linkClass}`}>
                Blogs
              </Link>
            </li>

            <li>
              <Link to="/admin/competitions" className={`${linkClass}`}>
                Competitions
              </Link>
            </li>

            <li>
              <Link to="/admin/achievements" className={`${linkClass}`}>
                Achievements
              </Link>
            </li>

            <li>
              <Link to="/admin/executives" className={`${linkClass}`}>
                Executives
              </Link>
            </li>

            <li>
              <Link to="/admin/aboutus" className={`${linkClass}`}>
                About Us
              </Link>
            </li>

            <li>
              <Link to="/home" className={`text-[#02e1dc] ${linkClass}`}>
                <div>
                  <div className="z-10" onClick={() => {}}>
                    <button
                      type="submit"
                      className="relative -top-1 -left-1 bg-[#F4F2F0] py-1 px-2 font-medium text-md md:text-lg text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 flex items-center"
                    >
                      <div className="inline-block mr-2">
                        <FiLogOut />
                      </div>
                      Sign Out
                    </button>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            className=" w-10 h-10 text-sm text-white hover:text-[#02E1DC]"
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

export default AdminNavbar;
