import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditAchievementForm from "../components/EditAchievementForm";

const CreateAchievementPage = () => {

  return (
    <>
      <div
        className={`flex flex-col min-h-screen admin-gradient-bg bg-cover bg-fixed bg-center`}
      >
        <EditAchievementForm/>
      </div>
    </>
  );
};

export default CreateAchievementPage;
