import React from "react";

const Button = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="z-10">
        <button
          type="submit"
          className="lg:px-24 md:px-24 px-12 mt-6 relative -top-1 -left-1 bg-[#F4F2F0] py-2.5 px-5 font-medium text-xl text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] 
                border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Button;
