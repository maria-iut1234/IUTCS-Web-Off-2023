import React from "react";
import BlogCard from "./BlogCard";
import FeaturedBlog from "./FeaturedBlog";

const BlogFeed = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <main className="mt-10">
          <FeaturedBlog
            blogTitle={
              "Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor."
            }
            blogTag={"Nutrition"}
            blogLink={""}
            creationDate={"14 Aug"}
            authorImage={"https://randomuser.me/api/portraits/men/97.jpg"}
            authorName={"Mike Sullivan"}
            blogImage={
              "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            }
          />

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
