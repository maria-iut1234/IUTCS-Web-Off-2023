import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import newRequest from "../utils/newRequest.util";
import configHeader from "../utils/configHeader.util";
import upload from "../utils/upload.util";

const EditExecutiveForm = ({ id }) => {
  const [executives, setExecutives] = useState([]);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  if (id) {
    useEffect(() => {
      async function fetchExecutiveData(id) {
        try {
          const response = await newRequest.get(`committee/getCommitteeMemberById/${id}`, configHeader);

          // Update state with the fetched achievement data
          const executivesData = response.data;
          setExecutives(executivesData);
          setName(executivesData.name);
          setPosition(executivesData.position);
          setImage(executivesData.photoUrl);

          // You can update other state variables as needed
          // setAchievementImage(achievementData.image);


        } catch (error) {
          console.error('Error fetching achievement:', error);
        }
      }

      // Fetch achievement data when 'id' prop changes
      fetchExecutiveData(id);
    }, [id]);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload the image and get its URL
      // const imageUrl = await upload(achievementImage);
      const imageUrl = achievementImage;
      // console.log("URL", imageUrl);

      const formData = {
        // title: achievementTitle,
        // awards: achievementAwards, // Use the state variable for awards
        // description: achievementDescription,
        // author: "Admin",
        // competition: achievementCompetition,
        // image: imageUrl,
        // teamMembers: achievementTeam,
        date: Date.now(),
      };

      console.log("Saved Executive Data:", formData);
      if (executives._id) {
        const response = await newRequest.put(`committee/updateCommitteeMember/${executives._id}`, formData, configHeader);
        console.log("Saved Achievement Data:", response.data);

        if (response.status === 200) {
          // Successful response
          window.alert("Executives updated successfully!");
          // Optionally, you can reset form fields or navigate to another page here
          navigate("/admin/executives");

        } else {
          // Handle other response statuses as needed
          console.error("Error saving executive data. Status:", response.status);
        }

      }
      else {
        const response = await newRequest.post(`committee/createCommitteeMember`, formData, configHeader);
        console.log("Saved Executive Data:", response.data);

        if (response.status === 200) {
          // Successful response
          window.alert("Executive created successfully!");
          // Optionally, you can reset form fields or navigate to another page here
        } else {
          // Handle other response statuses as needed
          console.error("Error saving executive data. Status:", response.status);
        }
      }

    } catch (error) {
      console.error("Error saving executive. Status:", error);
      // Handle the error and display a user-friendly error message
      window.alert("Error saving executive. Please try again later.");
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
                    navigate(`/admin/executives`)
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

          <div className="text-center">
            <h1 className="mb-2 text-5xl font-semibold text-white text-shadow-custom font-moderna-custom">
              {id ? "Edit Executive Details" : "Add A New Executive"}
            </h1>
          </div>
          <div className="flex flex-col space-y-1 mb-6">
            <label
              htmlFor="name"
              className="block text-md text-white font-moderna-custom"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
              placeholder="This is name of executive"
              required
            />
          </div>
          <div className="flex flex-col space-y-1 mb-6">
            <label
              htmlFor="position"
              className="block text-md text-white font-moderna-custom"
            >
              Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
              placeholder="This is executive position"
              required
            />
          </div>

          <div className="flex flex-col space-y-1 mb-6">
            <label
              htmlFor="image"
              className="block text-md text-white font-moderna-custom"
            >
              Photo
            </label>
            <input
              type="file"
              accept="image/*"
              id="image"
              name="image"
              onChange={(e) => setImage(e.target.value[0])}
              className="bg-white text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
              required
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditExecutiveForm;
