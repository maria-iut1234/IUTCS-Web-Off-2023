import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router";
import PopUp from "./PopUp";
import newRequest from "../utils/newRequest.util";
import configHeader from "../utils/configHeader.util";

const AchievementEditButtons = ({ achievementData }) => {
  console.log(achievementData)
  const [visibleModal, setVisibleModal] = useState(false);
  const openModal = () => {
    setVisibleModal(true);
  };
  const navigate = useNavigate();
  const handleDelete = async () => {
  
    try {
        const response = await newRequest.delete(`achievement/deleteAchievement/${achievementData._id}`, configHeader);
      if (response.status === 200) {
        // Successful response
        window.location.reload();
      } else {
        // Handle other response statuses as needed
        console.error("Error deleting achievement. Status:", response.status);
      }
    } catch (error) {
      console.error("Error deleting achievement. Status:", error);
      // Handle the error and display a user-friendly error message
      window.alert("Error deleting achievement. Please try again later.");
    }
  };
  return (
    <>
      {visibleModal && (
        <PopUp
          message={
            "Are you sure you want to delete the post? You cannot undo this action!"
          }
          redButtonText={"Delete"}
          redButtonFunction={handleDelete}
          normalButtonText={"Cancel"}
          normalButtonFunction={() => setVisibleModal(false)}
          setModalVisibility={setVisibleModal}
        />
      )}
      <div
        className="m-2 rounded-sm"
      >
        <div className="max-w-screen-xl flex justify-start gap-4 md:gap-8 mx-auto py-1">
          <div>
            <div className="z-10 p-2" 
              onClick={() => {
                navigate(`/admin/achievements/${achievementData._id}/edit`);
              }}>
              <button
                type="submit"
                className="lg:px-6 md:px-4 px-4 relative -top-1 -left-1 bg-[#F4F2F0] py-1 px-5 font-medium text-md md:text-lg text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 flex items-center"
              >
                <div className="inline-block mr-2">
                  <BiSolidEdit />
                </div>
                Edit
              </button>
            </div>
          </div>
          <div>
            <div
              className="z-10 p-2"
              onClick={() => {
                openModal();
              }}
            >
              <button
                type="submit"
                className="lg:px-6 md:px-4 px-4 relative -top-1 -left-1 bg-[#F4F2F0] py-1 px-5 font-medium text-md md:text-lg text-red-700 transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 flex items-center"
              >
                <div className="inline-block mr-2">
                  <MdOutlineDelete />
                </div>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AchievementEditButtons;
