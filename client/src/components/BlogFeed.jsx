import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { MdPostAdd } from "react-icons/md";
import { useNavigate } from "react-router";
import PageHeader from "./PageHeader";
import axios from "axios";
import newRequest from "../utils/newRequest.unti";

const BlogFeed = () => {
  const admin = true;
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    
    newRequest.get("blog/getAllBlogs").then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  }, []);

    const handleCardClick = (blogId) => {
      navigate(`/blogs/${blogId}`);             // Navigate to the single blog page with the selected blogId
    };

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <main className="mt-10">
          <PageHeader
            imageUrl={
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
            pageTitle={"Blogs"}
          />

          <div
            className="m-2 rounded-sm"
            style={{ backdropFilter: "blur(100px)" }}
          >
            <div className="max-w-screen-xl flex justify-end gap-4 md:gap-8 mx-auto py-1">
              <div>
                <div
                  className="z-10 p-2"
                  onClick={() => {
                    navigate("/admin/blogs/create");
                  }}
                >
                  <button
                    type="submit"
                    className="lg:px-6 md:px-4 px-4 relative -top-1 -left-1 bg-[#F4F2F0] py-1 px-5 font-medium text-md md:text-lg text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 flex items-center"
                  >
                    <div className="inline-block mr-2">
                      <MdPostAdd />
                    </div>
                    Create Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
            <div className="w-full">

              {/* Map over the fetched blogs and render BlogCard components */}
              {blogs.map((blog) => (   
                <BlogCard
                  key={blog.blog_id}
                  blogId={blog.blog_id}
                  imageURL={blog.image}
                  title={blog.title}
                  description={blog.description}
                  author={blog.author}
                  date={blog.date}
                  tags={blog.tags}
                  image={blog.image} 
                  admin={admin}
                  onClick={handleCardClick}
                />
              ))}  

            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default BlogFeed;
