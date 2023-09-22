import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import BlogFeed from "../components/BlogFeed";

const AdminBlogs = () => {
  return (
    <div className="flex flex-col min-h-screen admin-gradient-bg bg-cover bg-fixed bg-center">
        <AdminNavbar/>
        <BlogFeed/>
    </div>
  );
};

export default AdminBlogs;
