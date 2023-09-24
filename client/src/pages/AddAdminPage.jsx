import React, { useState } from "react";
import { useNavigate } from "react-router";

const AddAdminPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: null,
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //write your backend code here
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div
        className={`flex flex-col min-h-screen admin-gradient-bg bg-cover bg-fixed bg-center`}
      >
        <div className="mx-3 sm:mx-10 md:mx-40 lg:mx-80">
          <form className="space-y-4" onSubmit={handleSubmit}>
            
            <div
              className="px-4 m-2 rounded-sm"
              style={{ backdropFilter: "blur(100px)" }}
            >
              <div className=" flex justify-between mx-auto py-1">
                <div>
                  <div
                    className="z-10 py-2"
                    onClick={() => {
                      navigate(`/admin/home`);
                    }}
                  >
                    <button
                      type="button"
                      className="lg:px-12 md:px-6 px-6 relative -top-1 -left-1 bg-[#F4F2F0] py-1 px-5 font-medium text-md md:text-lg text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 flex items-center"
                    >
                      Back
                    </button>
                  </div>
                </div>

                <div>
                  <div className="z-10 py-2">
                    <button
                      type="submit"
                      className="lg:px-12 md:px-6 px-6 relative -top-1 -left-1 bg-[#F4F2F0] py-1 px-5 font-medium text-md md:text-lg text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 flex items-center"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h1 className="mb-2 text-5xl font-semibold text-white text-shadow-custom font-moderna-custom">
                Add An Admin 
              </h1>
            </div>

            <div className="flex flex-col space-y-1 mb-6">
              <label
                htmlFor="name"
                className="block text-md text-white font-moderna-custom"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
                required
              />
            </div>

            <div className="flex flex-col space-y-1 mb-6">
              <label
                htmlFor="name"
                className="block text-md text-white font-moderna-custom"
              >
                Email Adress
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
                required
              />
            </div>

            <div className="flex flex-col space-y-1 mb-6">
              <label
                htmlFor="name"
                className="block text-md text-white font-moderna-custom"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
                required
              />
            </div>

            <div className="flex flex-col space-y-1 mb-6">
              <label
                htmlFor="image"
                className="block text-md text-white font-moderna-custom"
              >
                Photo (Optional)
              </label>
              <input
                type="file"
                accept="image/*"
                id="image"
                name="image"
                onChange={handleChange}
                className="bg-white text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAdminPage;
