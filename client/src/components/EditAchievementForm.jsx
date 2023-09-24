import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import newRequest from "../utils/newRequest.unti";
import configHeader from "../utils/configHeader.util";
import upload from "../utils/upload.util";

const EditAchievementForm = ({ id }) => {
  const [achievements, setAchievements] = useState([]);
  const [achievementDescription, setAchievementDescription] = useState("");
  const [achievementTitle, setAchievementTitle] = useState("");
  const [achievementAwards, setAchievementAwards] = useState("");
  const [achievementCompetition, setAchievementCompetition] = useState("");
  const [achievementTeam, setAchievementTeam] = useState("");
  const [achievementImage, setAchievementImage] = useState(null);
  const navigate = useNavigate();
  if (id) {
    useEffect(() => {
      async function fetchAchievementData(id) {
        try {
          const response = await newRequest.get(`achievement/getAchievementById/${id}`, configHeader);

          // Update state with the fetched achievement data
          const achievementData = response.data;
          setAchievements(achievementData);
          setAchievementDescription(achievementData.description);
          setAchievementTitle(achievementData.title);
          setAchievementAwards(achievementData.awards);
          setAchievementTeam(achievementData.teamMembers);
          setAchievementCompetition(achievementData.competition);

          // You can update other state variables as needed
          // setAchievementImage(achievementData.image);


        } catch (error) {
          console.error('Error fetching achievement:', error);
        }
      }

      // Fetch achievement data when 'id' prop changes
      fetchAchievementData(id);
    }, [id]);
  }
  const handleTitleChange = (e) => {
    setAchievementTitle(e.target.value);
  };

  const handleAwardsChange = (e) => {
    setAchievementAwards(e.target.value);
  };
  const handleCompetitionChange = (e) => {
    setAchievementCompetition(e.target.value);
  };
  const handleImageChange = (e) => {
    setAchievementImage(e.target.files[0]);
  };
  const handleTeamChange = (e) => {
    setAchievementTeam(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Upload the image and get its URL
      // const imageUrl = await upload(achievementImage);
      const imageUrl = achievementImage;
      // console.log("URL", imageUrl);
  
      const formData = {
        title: achievementTitle,
        awards: achievementAwards, // Use the state variable for awards
        description: achievementDescription,
        author: "Admin",
        competition: achievementCompetition,
        image: imageUrl,
        teamMembers: achievementTeam,
        date: Date.now(),
      };
  
      console.log("Saved Achievement Data:", formData);
      if (achievements._id) {
        const response = await newRequest.put(`achievement/updateAchievement/${achievements._id}`, formData, configHeader);
        console.log("Saved Achievement Data:", response.data);
  
      if (response.status === 200) {
        // Successful response
        window.alert("Achievement updated successfully!");
        // Optionally, you can reset form fields or navigate to another page here
      } else {
        // Handle other response statuses as needed
        console.error("Error saving achievement. Status:", response.status);
      }
        
      }
      else {
        const response = await newRequest.post(`achievement/createAchievement`, formData, configHeader);
        console.log("Saved Achievement Data:", response.data);
  
      if (response.status === 200) {
        // Successful response
        window.alert("Achievement created successfully!");
        // Optionally, you can reset form fields or navigate to another page here
      } else {
        // Handle other response statuses as needed
        console.error("Error saving achievement. Status:", response.status);
      }
      }
      
    } catch (error) {
      console.error("Error saving achievement. Status:", error);
      // Handle the error and display a user-friendly error message
      window.alert("Error saving achievement. Please try again later.");
    }
  };
  
  
  return (
    <>
      <div className="mx-3 sm:mx-10 md:mx-40 lg:mx-80">
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
                    if(id) navigate(`/admin/achievements`)
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
                    onClick={handleSubmit}
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
              Achievement Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={achievementTitle}
              onChange={handleTitleChange}
              className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
              placeholder="This is an achievement title"
              required
            />
          </div>
          <div className="flex flex-col space-y-1 mb-6">
            <label
              htmlFor="awards"
              className="block text-md text-white font-moderna-custom"
            >
              Achievement Type
            </label>
            <input
              type="text"
              id="awards"
              name="awards"
              value={achievementAwards}
              onChange={handleAwardsChange}
              className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
              placeholder="This is an achievement type"
              required
            />
          </div>
          <div className="flex flex-col space-y-1 mb-6">
            <label
              htmlFor="competition"
              className="block text-md text-white font-moderna-custom"
            >
              Achievement Competition
            </label>
            <input
              type="text"
              id="competition"
              name="competition"
              value={achievementCompetition}
              onChange={handleCompetitionChange}
              className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
              placeholder="This is an achievement competition"
              required
            />
          </div>
          <div className="flex flex-col space-y-1 mb-6">
          <label
              htmlFor="team"
              className="block text-md text-white font-moderna-custom"
            >
              Achievement Team or Individual
            </label>
            <input
              type="text"
              id="team"
              name="team"
              value={achievementTeam}
              onChange={handleTeamChange}
              className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
              placeholder="This is an achievement team or individual"
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
