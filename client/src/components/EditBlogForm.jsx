import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import axios from "axios";
import newRequest from "../utils/newRequest.unti";
import configHeader from "../utils/configHeader.util";
import upload from "../utils/upload.util";

const EditBlogForm = ({ id }) => {
  const [blogDescription, setBlogDescription] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogTag, setBlogTag] = useState("");
  const [blogImage, setBlogImage] = useState(null);
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setBlogTitle(e.target.value);
  };

  const handleTagChange = (e) => {
    setBlogTag(e.target.value);
  };

  const handleImageChange = (e) => {
    setBlogImage(e.target.files[0]);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try 
    {  

      // Upload the image and get its URL
      const imageUrl = await upload(blogImage);
      console.log("URL", imageUrl);

      const formData = {
        blog_id : "1",
        title: blogTitle,
        description: blogDescription,
        author: "Admin",
        tags: [ blogTag ],
        image: imageUrl,
      };

      console.log("Saved Blog Data:", formData);

      const response = await newRequest.post("blog/createBlog", formData, configHeader);

      console.log("Saved Blog Data:", response.data);

      window.alert("Blog saved successfully!");
    } 
    
    catch (error) {
      console.error(error.response.data);
    }

  };
  
  return (
    <>
      <div className="mx-7">
        <form className="space-y-4" onSubmit={handleSubmit} >
          <div
            className="px-4 m-2 rounded-sm"
            style={{ backdropFilter: "blur(100px)" }}
          >
            <div className=" flex justify-between mx-auto py-1">
              <div>
                <div
                  className="z-10 py-2"
                  onClick={() => {
                    if(id) navigate(`/admin/blogs/${id}`)
                    else navigate(`/admin/blogs`)
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
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-1 mb-6">
            <label
              htmlFor="title"
              className="block text-md text-white font-moderna-custom"
            >
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={blogTitle}
              onChange={handleTitleChange}
              className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
              placeholder="This is a blog"
              required
            />
          </div>

          <div className="flex flex-col space-y-1 mb-6">
            <label
              htmlFor="image"
              className="block text-md text-white font-moderna-custom"
            >
              Blog Image
            </label>
            <input
              type="file"
              accept="image/*"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="bg-white text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
              required
            />
          </div>

          <div className="flex flex-col space-y-1 mb-6">
            <label
              htmlFor="tag"
              className="block text-md text-white font-moderna-custom"
            >
              Add a tag to your blog
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              onChange={handleTagChange}
              className="bg-white text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
            />
          </div>

          <div className="w-full pb-2">
            <label
              htmlFor="blogContent"
              className="block text-md text-white font-moderna-custom mb-2"
            >
              Blog Content
            </label>
            <MDEditor
              value={blogDescription}
              onChange={setBlogDescription}
              className=" min-h-screen"
              style={{
                ".wMdEditorTextPre, .wMdEditorTextInput, .wMdEditorText>.wMdEditorTextPre":
                  {
                    fontFamily: "'Poppins', sans-serif",
                  },
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditBlogForm;
