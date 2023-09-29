import React, { useState } from "react";
import { Link } from "react-router-dom";
import newRequest from "../utils/newRequest.util";
import configHeader from "../utils/configHeader.util";
import { useNavigate } from 'react-router-dom';

function AdminSignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await newRequest.post(`admin/adminSignin`, formData, configHeader);
      // Assuming your server responds with a JWT token
      const {token} = response.data;
      // Store the token in localStorage or a more secure storage method
      localStorage.setItem('adminToken', token);
      console.log('User signed in!');
      console.log(token);
      window.location.reload();
      navigate('/admin/home');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="flex items-center min-h-screen admin-gradient-bg">
      <div className="container mx-auto px-6">
        <div
          className="max-w-lg mx-auto px-8 py-12 my-10 bg-white shadow-lg drop-shadow-xl bg-opacity-30 "
          style={{
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 60px rgba(2, 225, 220, 0.5)",
          }}
        >
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-semibold text-white text-shadow-custom font-moderna-custom">
              Admin Portal
            </h1>
          </div>
          <div className="mx-3 mt-7">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-1 mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm text-white font-moderna-custom"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
                  placeholder="johndoe@example.com"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1 mb-10">
                <label
                  htmlFor="password"
                  className="block text-sm text-white font-moderna-custom"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
                  placeholder="********"
                  required
                />
              </div>
              <div>
                <Link
                  to=""
                  className="text-sm hover:text-white hover:underline text-white font-moderna-custom"
                >
                  Forgot Your Password?
                </Link>
              </div>
              <div className="mb-6">
                <div className="flex flex-col items-center justify-center">
                  <div className="z-10">
                    <button
                      type="submit"
                      className="lg:px-24 md:px-24 px-12 mt-6 relative -top-1 -left-1 bg-[#F4F2F0] py-2.5 px-5 font-medium text-xl text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 w-full"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSignIn;
