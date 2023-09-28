import React from "react";

const BlogCard = ({ admin, blogId, title, description, author, date, tags, image, onClick }) => {
  const blogLink = admin ? `/admin/blogs/${blogId}` : `/blogs/${blogId}`



  return (
    <>

      <div
        className="block rounded w-full mb-10 cursor-pointer"
      ></div>

      <a className="block rounded w-full mb-10" href={blogLink}>
        {image && (<div
          className="h-48 flex-none bg-cover text-center overflow-hidden opacity-75"
          style={{
            backgroundImage: `url('${image}')`,
          }}
          title="deit is very important"
        ></div>)}
        <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
          <div>
            <div className="mt-3 text-gray-700 font-bold text-2xl mb-2">
              {title}
            </div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="flex my-3">
            <div>
              <p className="font-semibold text-gray-700 text-sm capitalize">
                {author}
              </p>
              <p className="text-gray-600 text-xs">
                {new Date(date).toLocaleDateString()}
              </p>
              <div className="flex flex-wrap mt-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 px-2 py-1 bg-gray-200 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default BlogCard;
