import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditBlogForm from "../components/EditBlogForm";

const CreateBlogPage = () => {

  return (
    <>
      <div
        className={`flex flex-col min-h-screen admin-gradient-bg bg-cover bg-fixed bg-center`}
      >
        <EditBlogForm/>
      </div>
    </>
  );
};

export default CreateBlogPage;
