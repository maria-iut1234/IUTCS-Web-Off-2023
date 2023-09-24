import React from "react";
import footer_logo from "../assets/IUTCS_logo_transparent_light.png";

function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight xl:text-2xl text-white">
              Email us any suggestions or report any problems.
            </h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 border rounded-md bg-gray-900 text-gray-300 border-gray-600 focus:border-blue-400 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Go
              </button>
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
