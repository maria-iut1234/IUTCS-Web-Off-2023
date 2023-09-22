import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass =
    "py-4 md:mx-8 md:py-0 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#02E1DC] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center hover:text-[#02E1DC]";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="shadow-md border-gray-100 drop-shadow-xl"
      style={{ boxShadow: "0px 0px 20px rgba(2, 225, 220, 0.5)" }}
    >
      <div className="max-w-7xl mx-auto my-5 px-4 sm:px-6">
        <div className="flex flex-col-reverse md:flex-row min-w-full py-6 space-y-8 justify-center md:justify-between md:space-x-10">
          <Link to="/" className="flex-1 md:self-start">
            <div className="flex justify-center">
              <div className="flex justify-center items-center">

                <span className="font-moderna-custom pt-1 mx-3 whitespace-nowrap text-4xl font-light text-red-700 hover:text-gray-900">
                  IUTCS LOGO GOES HERE
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <nav className="flex justify-between bg-black text-white w-full">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <ul
            className={`md:flex px-4 mx-auto font-semibold font-heading ${
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
              <Link to="/admin/executives" className={`${linkClass}`}>
                Executives
              </Link>
            </li>

            <li>
              <Link to="/admin/aboutus" className={`${linkClass}`}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="pt-1 w-10 h-10 text-sm text-white hover:text-[#02E1DC]"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
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
