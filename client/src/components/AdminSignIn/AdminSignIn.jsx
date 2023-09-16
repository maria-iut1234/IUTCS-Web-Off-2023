import React, { useState } from "react";
import backgroundImage from "../../assets/iutcs_logo_dark.jpg";

function AdminSignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", formData.email);
    console.log("password: ", formData.password);
  };

  return (
    <section className="min-h-screen flex items-stretch text-white">
      {/* <div
        className="lg:flex w-0 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        // style={{
        //   backgroundImage:
        //     "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
        // }}
        style={{
            backgroundImage: `url(${backgroundImage})`, // Use the imported image here
          }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            Keep it special
          </h1>
          <p className="text-3xl my-4">
            Capture your personal memory in a unique way, anywhere.
          </p>
        </div>
      </div> */}

      <div className="w-full h-screen m-auto xl:pl-24 px-6 py-12 radial-bg">
        <h2 className="text-center text-6xl text-white font-medium mb-8">
          Admin Portal
        </h2>
        <form className="p-8 flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-xl">
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
            <label htmlFor="password" className="text-xl">
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
          <div className="flex flex-col items-center justify-center">
            <div className="z-10">
              <button
                type="submit"
                className="lg:px-24 md:px-24 px-12 mt-6 relative -top-1 -left-1 bg-[#F4F2F0] py-2.5 px-5 font-medium text-xl text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AdminSignIn;
