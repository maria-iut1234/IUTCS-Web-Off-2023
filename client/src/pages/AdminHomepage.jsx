import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import { TypeAnimation } from "react-type-animation";
import AdminQuickLinkSection from "../components/AdminQuickLinkSection";

const AdminHomepage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen admin-gradient-bg bg-cover bg-fixed bg-center">
        <AdminNavbar />
        <div className="min-h-[45vh] items-center flex:items-center">
          <div className="mx-auto">
            <div className="flex flex-col items-center gap-y-8">
              <div className="flex-1 text-center text-white">
                <h1 className="text-[55px] text-[#02e1dc] mt-6 font-bold leading-[1] min-h-[80px] ">
                  IUT <span>Computer Society</span>
                </h1>
                <div className="mb-6 text-[48px] leading-[0.5]">
                  <span className="mr-4 text-white">Welcome</span>
                  <TypeAnimation
                    sequence={["Admin", 2000, "Back", 2000]}
                    speed={70}
                    className="text-[#02e1dc]"
                    wrapper="span"
                    repeat={Infinity}
                  />
                </div>
              </div>
            </div>
          </div>            
          <AdminQuickLinkSection />
        </div>
      </div>
    </>
  );
};

export default AdminHomepage;
