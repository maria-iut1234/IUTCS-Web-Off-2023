import React from 'react'

const AboutUsPage = () => {
  const admin = true; //CHECK FOR ADMIN
  const bgClass = admin? "admin-gradient-bg" : "user-gradient-bg"
  return (
    <div className={`flex flex-col min-h-screen ${bgClass} bg-cover bg-fixed bg-center`}>
      {/* user navbar yet to be implemented */}
      {/* about component here  */}
    </div>
  )
}

export default AboutUsPage