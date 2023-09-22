import React from "react";
import { BiSolidEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";

const BlogEditButtons = () => {
  return (
    <div
      className="bg-black m-2 rounded-sm"
      style={{ backdropFilter: "blur(100px)" }}
    >
      <div className="max-w-screen-xl flex justify-end mx-auto py-1">
        <div>
          <div className="z-10 p-2">
            <button
              type="submit"
              className="lg:px-6 md:px-2 px-2 relative -top-1 -left-1 bg-[#F4F2F0] py-1 px-5 font-medium text-md text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 flex items-center"
            >
              <div className="inline-block mr-2">
                <BiSolidEdit />
              </div>
              Edit
            </button>
          </div>
        </div>
        <div>
          <div className="z-10 p-2">
            <button
              type="submit"
              className="lg:px-6 md:px-2 px-2 relative -top-1 -left-1 bg-[#F4F2F0] py-1 px-5 font-medium text-md text-red-700 transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 flex items-center"
            >
              <div className="inline-block mr-2">
                <MdOutlineDelete />
              </div>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEditButtons;
