import React from "react";
import { useParams } from "react-router-dom";
import EditBlogForm from "../components/EditBlogForm";

const EditBlogPage = () => {
  const { id } = useParams();

  return (
    <>
      <div
        className={`flex flex-col min-h-screen admin-gradient-bg bg-cover bg-fixed bg-center`}
      >
        <EditBlogForm id={id}/>
      </div>
    </>
  );
};

export default EditBlogPage;
