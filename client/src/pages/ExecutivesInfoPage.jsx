import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import LandingPageNavbar from '../components/LandingPageNavbar'
import ExecutivesCarousel from '../components/ExecutivesCarousel'
import { MdPostAdd } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const ExecutivesInfoPage = ({ admin }) => {
  const navigate = useNavigate();
  const bgClass = admin ? "admin-gradient-bg" : "user-gradient-bg"
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
                navigate("/admin/executives/create");
              }}
            >
              <button
                type="submit"
                className=" px-4 relative -top-1 -left-1 bg-[#F4F2F0] py-1 px-5 font-medium text-md text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 flex items-center"
              >
                <div className="inline-block mr-2">
                  <MdPostAdd />
                </div>
                Add An Executive
              </button>
            </div>
          </div>
        </div>
      </div>)}
      <ExecutivesCarousel admin={admin} />

    </div>
  )
}

export default ExecutivesInfoPage