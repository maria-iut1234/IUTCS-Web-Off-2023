import React from 'react'
import AdminNavbar from "../components/AdminNavbar";
import AchievementsCarousel from "../components/AchievementsCarousel";

const AchievementsPage = () => {
  const admin = true; //CHECK FOR ADMIN
  const bgClass = admin ? "admin-gradient-bg" : "user-gradient-bg"
  return (
    <div className={`flex flex-col min-h-screen ${bgClass} bg-cover bg-fixed bg-center`}>
    <AdminNavbar />
      {/* achievements component here  */}
    <AchievementsCarousel />
    </div>
  )
}

export default AchievementsPage
