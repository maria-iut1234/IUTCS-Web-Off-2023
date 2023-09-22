//react stuff
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//component imports
import AdminSignIn from "./pages/AdminSignIn";

//css import
import "./App.css";
import AdminHomepage from "./pages/AdminHomepage";
import LandingPage from "./pages/LandingPage";
import AdminBlogs from "./pages/AdminBlogs";
import SingleBlogPage from "./pages/SingleBlogPage";
import AdminAboutUsPage from "./pages/AdminAboutUsPage";
import UserAboutUsPage from "./pages/UserAboutUsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* admin routes  */}
        <Route path="/admin/signin" element={<AdminSignIn />} />
        <Route path="/admin/home" element={<AdminHomepage/>}/>
        <Route path="/admin/blogs" element={<AdminBlogs/>}/>
        <Route path="/admin/aboutus" element={<AdminAboutUsPage/>}/>
        <Route path="/admin/blogs/1" element={<SingleBlogPage/>}/> {/* HARDCODED ID FOR NOW */}

        {/* without login pages  */}
        <Route path="/home" element={<LandingPage/>}/>
        <Route path="/aboutus" element={<UserAboutUsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//route functions
// function PublicUser ({children}){
//   //is user;
//   const currentUser = getCurrentUser();
//   if(currentUser===null || currentUser===undefined){
//     return <>{children}</>
//   } else if(currentUser.isAdmin) {
//     return <Navigate to="/adminDashboard"/>
//   }else if(currentUser.isContributer) {
//     return <Navigate to="/userDashboard"/>
//   }else {
//     return <Navigate to="/userDashboard"/>
//   }
// }

function AdminUser({ children }) {
  return <>{children}</>;
  //is user;
  //   const currentUser = getCurrentUser();
  //   if(currentUser!==null && currentUser!==undefined && currentUser.isAdmin===true && currentUser.isContributer===false){
  //     return <>{children}</>
  //   } else if(currentUser===null || currentUser===undefined) {
  //     return <Navigate to="/login"/>
  //   } else if(currentUser.isContributer===true){
  //     return <Navigate to="/userDashboard"/>
  //   }else {
  //     return <Navigate to="/userDashboard"/>
  //   }
}
