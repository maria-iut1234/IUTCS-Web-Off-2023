import React from 'react'
import AdminNavbar from "../components/AdminNavbar";
import AchievementsCarousel from "../components/AchievementsCarousel";
import LandingPageNavbar from '../components/LandingPageNavbar';
import { useNavigate } from 'react-router-dom';
import { MdPostAdd } from 'react-icons/md';

const AchievementsPage = ({ admin }) => {
  const bgClass = admin ? "admin-gradient-bg" : "user-gradient-bg"
  const navigate = useNavigate()
  return (
    <div className={`flex flex-col min-h-screen ${bgClass} bg-cover bg-fixed bg-center`}>
      {admin ? <AdminNavbar /> : <LandingPageNavbar />}
      {admin && (<div
        className="m-2 rounded-sm"
        style={{ backdropFilter: "blur(100px)" }}
      >
        <div className="max-w-screen-xl flex justify-end gap-4 mx-auto py-1">
          <div>
            <div
              className="z-10 p-2"
              onClick={() => {
                navigate("/admin/achievements/create");
              }}
            >
              <button
                type="submit"
                className=" px-4 relative -top-1 -left-1 bg-[#F4F2F0] py-1 px-5 font-medium text-md text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 flex items-center"
              >
                <div className="inline-block mr-2">
                  <MdPostAdd />
                </div>
                Add An Achievement
              </button>
            </div>
          </div>
        </div>
      </div>)}
      <AchievementsCarousel admin={admin}/>
    </div>
  )
}

export default AchievementsPage
