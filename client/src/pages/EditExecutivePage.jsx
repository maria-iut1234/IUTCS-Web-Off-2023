import React from "react";
import { useParams } from "react-router-dom";
import EditExecutiveForm from "../components/EditExecutiveForm";

const EditExecutivePage = () => {
  const { id } = useParams();
  return (
    <>
      <div
        className={`flex flex-col min-h-screen admin-gradient-bg bg-cover bg-fixed bg-center`}
      >
        <EditExecutiveForm id={id}/>
      </div>
    </>
  );
};

export default EditExecutivePage;
