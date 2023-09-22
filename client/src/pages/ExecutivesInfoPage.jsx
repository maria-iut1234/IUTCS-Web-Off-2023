import React from 'react'
import AdminNavbar from '../components/AdminNavbar'

const ExecutivesInfoPage = () => {
  const admin = true; //CHECK FOR ADMIN
  const bgClass = admin? "admin-gradient-bg" : "user-gradient-bg"
  return (
    <div className={`flex flex-col min-h-screen ${bgClass} bg-cover bg-fixed bg-center`}>
      <AdminNavbar />
    </div>
  )
}

export default ExecutivesInfoPage