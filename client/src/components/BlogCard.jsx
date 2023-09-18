import React from "react";

const BlogCard = ({ imageURL, header, description, author, dateOfCreation }) => {
  return (
    <>
      <a className="block rounded w-full lg:flex mb-10" href="#">
        <div
          className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
          style={{
            backgroundImage: `url('${imageURL}')`,
          }}
          title="deit is very important"
        ></div>
        <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
          <div>
            <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
              {header}
            </div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="flex my-3">
            <img
              src="https://randomuser.me/api/portraits/men/86.jpg"
              className="h-10 w-10 rounded-full mr-2 object-cover"
            />
            <div>
              <p className="font-semibold text-gray-700 text-sm capitalize">
                {author} {/* Use the author prop here */}
              </p>
              <p className="text-gray-600 text-xs">
                {dateOfCreation} {/* Use the dateOfCreation prop here */}
              </p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default BlogCard;
