import React from 'react'
import AdminNavbar from "../components/AdminNavbar";
import AboutUsContent from "../components/AboutUsContent";
import AboutUsBanner from "../components/AboutUsBanner";
import LandingPageNavbar from '../components/LandingPageNavbar';

const AboutUsPage = ({ admin }) => {
  const bgClass = admin ? "admin-gradient-bg" : "user-gradient-bg"
  return (
    <div className={`flex flex-col min-h-screen ${bgClass} bg-cover bg-fixed bg-center`}>
      {admin ? <AdminNavbar /> : <LandingPageNavbar />}
      <AboutUsBanner admin={admin}/>
      <AboutUsContent admin={admin}/>
    </div>
  )
}

export default AboutUsPage
