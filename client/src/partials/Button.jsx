import React from "react";

const Button = () => {
  return (
    <div class="flex  flex-col items-center justify-center ">
      <div class="z-10">
        <button
          type="submit"
          className="relative -top-1 -left-1 bg-gray-800 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Button;
