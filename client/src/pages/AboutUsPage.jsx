import React from 'react'
import AdminNavbar from "../components/AdminNavbar";
import AboutUsContent from "../components/AboutUsContent";
import AboutUsBanner from "../components/AboutUsBanner";

const AboutUsPage = () => {
  const admin = true; //CHECK FOR ADMIN
  const bgClass = admin ? "admin-gradient-bg" : "user-gradient-bg"
  return (
    <div className={`flex flex-col min-h-screen ${bgClass} bg-cover bg-fixed bg-center`}>
      <AdminNavbar />
      {/* about component here  */}
      <AboutUsBanner />

      <AboutUsContent />
    </div>
  )
}

export default AboutUsPage
