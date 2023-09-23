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
import UserAboutUsPage from "./pages/AboutUsPage";
import ExecutivesInfoPage from "./pages/ExecutivesInfoPage";
import EditBlogPage from "./pages/EditBlogPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* admin routes  */}
        <Route path="/admin/signin" element={<AdminSignIn />} />
        <Route path="/admin/home" element={<AdminHomepage/>}/>
        <Route path="/admin/blogs" element={<AdminBlogs/>}/>
        <Route path="/admin/blogs" element={<AdminBlogs/>}/>
        <Route path="/admin/aboutus" element={<AboutUsPage/>}/>
        <Route path="/admin/executives" element={<ExecutivesInfoPage/>}/>
        <Route path="/admin/blogs/:id/edit" element={<EditBlogPage/>}/> {/* HARDCODED ID FOR NOW */}
        <Route path="/admin/blogs/:id" element={<SingleBlogPage/>}/> {/* HARDCODED ID FOR NOW */}

        {/* without login pages  */}
        <Route path="/aboutus" element={<AboutUsPage/>}/>
        <Route path="/home" element={<LandingPage/>}/>
        <Route path="/executives" element={<ExecutivesInfoPage/>}/>
        <Route path="/aboutus" element={<AboutUsPage/>}/>
        <Route path="/blogs/:id" element={<SingleBlogPage/>}/> {/* HARDCODED ID FOR NOW */}
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
