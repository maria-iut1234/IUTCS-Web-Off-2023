import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import BlogFeed from "../components/BlogFeed";
import LandingPageNavbar from "../components/LandingPageNavbar";

const BlogPage = ({ admin }) => {
  const bgClass = admin ? "admin-gradient-bg" : "user-gradient-bg"
  return (
    <div className={`flex flex-col min-h-screen ${bgClass} bg-cover bg-fixed bg-center`}>
      {admin ? <AdminNavbar /> : <LandingPageNavbar />}
      <BlogFeed admin={admin} />
    </div>
  );
};

export default BlogPage;
