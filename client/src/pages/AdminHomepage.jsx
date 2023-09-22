import React from "react";
import AdminNavbar from "../components/AdminNavbar";

const AdminHomepage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen admin-gradient-bg bg-cover bg-fixed bg-center">
        <AdminNavbar />
      </div>
    </>
  );
};

export default AdminHomepage;
