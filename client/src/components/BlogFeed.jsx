import React from "react";
import BlogCard from "./BlogCard";

const BlogFeed = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <main className="mt-10">
          <div className="block md:flex md:space-x-2 px-2 lg:p-0 w-full">
            <a
              className="mb-4 md:mb-0 w-full relative rounded inline-block"
              style={{ height: "24em" }}
              href="#"
            >
              <div
                className="absolute left-0 bottom-0 w-full h-full z-10"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, transparent, rgba(0,0,0,.7))",
                }}
              ></div>
              <img
                src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
              />
              <div className="p-4 absolute bottom-0 left-0 z-20">
                <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                  Nutrition
                </span>
                <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                  Pellentesque a consectetur velit, ac molestie ipsum. Donec
                  sodales, massa et auctor.
                </h2>
                <div className="flex mt-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/97.jpg"
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-200 text-sm">
                      Mike Sullivan
                    </p>
                    <p className="font-semibold text-gray-400 text-xs">
                      14 Aug
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
            <div className="w-full">
              <BlogCard
                imageURL={
                  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                }
                header={
                  "Aliquam venenatis nisl id purus rhoncus, in efficitur sem hendrerit."
                }
                description={
                  " Duis euismod est quis lacus elementum, eu laoreet dolor consectetur. Pellentesque sed neque vel tellus lacinia elementum. Proin consequat ullamcorper eleifend."
                }
                author={"eduard franz"}
                dateOfCreation={"14 Aug 2023"}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default BlogFeed;
