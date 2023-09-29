import React from "react";
import footer_logo from "../assets/IUTCS_logo_transparent_light.png";
import { useNavigate } from "react-router";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2 items-center">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight xl:text-2xl text-white">
              One of us? Step into the secret portal!
            </h1>

            <div className="flex flex-col w-2/6 md:w-2/6 lg:w-1/3 justify-start" onClick={()=> navigate("/admin/signin")}>
              <div className="z-10">
                <button
                  type="buton"
                  className="lg:px-12 md:px-2 px-2 mt-6 relative -top-1 -left-1 bg-[#F4F2F0] py-2.5 px-5 font-medium text-xl text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 w-full"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Quick Link</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Home
              </a>
              <a
                href="#"
                className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Who We Are
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Segments</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Competitive Programming
              </a>
              <a
                href="#"
                className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Capture The Flag (CTF)
              </a>
              <a
                href="#"
                className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Hackathon
              </a>
              <a
                href="#"
                className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                E-Sports
              </a>
              <a
                href="#"
                className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                IT Olympiad
              </a>
              <a
                href="#"
                className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                IT Business Case
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 md:my-8 border-gray-700" />

        <div className="flex items-center justify-center">
          <a href="#">
            <img className="w-auto h-12" src={footer_logo} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
