import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass =
    "mx-8 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#02E1DC] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center hover:text-[#02E1DC]";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b-2 shadow-md border-gray-100 pb-5">
      <div className="max-w-7xl mx-auto my-5 px-4 sm:px-6">
        <div className="flex flex-col-reverse md:flex-row min-w-full py-6 space-y-8 justify-center md:justify-between md:space-x-10">
          <Link to="/" className="flex-1 md:self-start">
            <div className="flex justify-center">
              <div className="flex justify-center items-center">
                <span className="pt-1 mx-3 whitespace-nowrap text-4xl italic font-light text-red-700 hover:text-gray-900">
                  AisModa.
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <nav className="flex justify-between bg-gray-900 text-white w-screen">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <ul
            className={`md:flex px-4 mx-auto font-semibold font-heading ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <Link to="" className={`${linkClass}`}>
              Link1
            </Link>
            <Link to="" className={`${linkClass}`}>
              Link2
            </Link>
            <Link to="" className={`${linkClass}`}>
              Link3
            </Link>
            <Link to="" className={`${linkClass}`}>
              Link4
            </Link>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="navbar-burger self-center mr-12 md:hidden hover:text-[#02E1DC]"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavbar;
