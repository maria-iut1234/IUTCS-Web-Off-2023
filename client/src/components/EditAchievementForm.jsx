import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import axios from "axios";
import newRequest from "../utils/newRequest.unti";
import configHeader from "../utils/configHeader.util";
import upload from "../utils/upload.util";

const EditAchievementForm = ({ id }) => {
  const [achievementDescription, setAchievementDescription] = useState("");
  const [achievementTitle, setAchievementTitle] = useState("");
  const [achievementImage, setAchievementImage] = useState(null);
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setAchievementTitle(e.target.value);
  };

  const handleTagChange = (e) => {
    setAchievementTag(e.target.value);
  };

  const handleImageChange = (e) => {
    setAchievementImage(e.target.files[0]);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try 
    {  
      // Upload the image and get its URL
      const imageUrl = await upload(achievementImage);
      console.log("URL", imageUrl);

      const formData = {
        _id : "",
        title: achievementTitle,
        description: achievementDescription,
        author: "Admin",
        image: imageUrl,
      };

      console.log("Saved Achievement Data:", formData);

      const response = await newRequest.post("achievement/createAchievement", formData, configHeader);

      console.log("Saved Achievement Data:", response.data);

      window.alert("Achievement saved successfully!");
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
                    if(id) navigate(`/admin/achievements/${id}`)
                    else navigate(`/admin/achievements`)
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
                    {id ? "Save" : "Add"}
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
              Achievement Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={achievementTitle}
              onChange={handleTitleChange}
              className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
              placeholder="This is an achievement"
              required
            />
          </div>

          <div className="flex flex-col space-y-1 mb-6">
            <label
              htmlFor="image"
              className="block text-md text-white font-moderna-custom"
            >
              Achievement Image
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

          <div className="w-full pb-2">
            <label
              htmlFor="achievementContent"
              className="block text-md text-white font-moderna-custom mb-2"
            >
              Achievement Content
            </label>
            <MDEditor
              value={achievementDescription}
              onChange={setAchievementDescription}
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

export default EditAchievementForm;
