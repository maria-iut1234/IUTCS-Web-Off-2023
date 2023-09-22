import React from "react";

const FeaturedBlog = ({
  blogLink,
  blogTitle,
  blogTag,
  authorImage,
  authorName,
  creationDate,
  blogImage,
}) => {
  return (
    <div className="block md:flex md:space-x-2 px-2 lg:p-0 w-full">
      <a
        className="mb-4 md:mb-0 w-full relative rounded inline-block"
        style={{ height: "24em" }}
        href={blogLink}
      >
        <div
          className="absolute left-0 bottom-0 w-full h-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg, transparent, rgba(0,0,0,.7))",
          }}
        ></div>
        <img
          src={blogImage}
          className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
            {blogTag}
          </span>
          <h2 className="text-xl md:text-4xl font-semibold text-gray-100 leading-tight">
            {blogTitle}
          </h2>
          <div className="flex mt-3">
            <img
              src={authorImage}
              className="h-10 w-10 rounded-full mr-2 object-cover"
            />
            <div>
              <p className="font-semibold text-gray-200 text-sm">
                {authorName}
              </p>
              <p className="font-semibold text-gray-400 text-xs">
                {creationDate}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FeaturedBlog;
