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
import ExecutivesInfoPage from "./pages/ExecutivesInfoPage";
import EditBlogPage from "./pages/EditBlogPage";
import AboutUsPage from "./pages/AboutUsPage";
import AdminViewCompetition from "./pages/AdminViewCompetition";
import CreateBlogPage from "./pages/CreateBlogPage";
import { EditTeamParticipantsPage } from "./pages/EditTeamParticipantsPage";
import EditIndividualParticipantsPage from "./pages/EditIndividualParticipantsPage";
import AchievementsPage from "./pages/AchievementsPage";
import CreateAchievementPage from "./pages/CreateAchievementPage";
import EditAchievementPage from "./pages/EditAchievementPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* admin routes  */}
        <Route path="/admin/signin" element={<AdminSignIn />} />
        <Route path="/admin/home" element={<AdminHomepage/>}/>
        <Route path="/admin/blogs" element={<AdminBlogs/>}/>
        <Route path="/admin/aboutus" element={<AboutUsPage/>}/>
        <Route path="/admin/competitions" element={<AdminViewCompetition/>}/>
        <Route path="/admin/competitions/:id/team/edit" element={<EditTeamParticipantsPage/>}/>
        <Route path="/admin/competitions/:id/participant/edit" element={<EditIndividualParticipantsPage/>}/>
        <Route path="/admin/executives" element={<ExecutivesInfoPage />} />
        <Route path="/admin/achievements" element={<AchievementsPage />} />
        <Route path="/admin/achievements/:id/edit" element={<EditAchievementPage/>}/> 
        <Route path="/admin/achievements/create" element={<CreateAchievementPage/>}/> 
        <Route path="/admin/blogs/:id/edit" element={<EditBlogPage/>}/> 
        <Route path="/admin/blogs/create" element={<CreateBlogPage/>}/> 
        <Route path="/admin/blogs/:id" element={<SingleBlogPage/>}/> 

        {/* without login pages  */}
        <Route path="/aboutus" element={<AboutUsPage/>}/>
        <Route path="/home" element={<LandingPage/>}/>
        <Route path="/executives" element={<ExecutivesInfoPage />} />
        <Route path="/achievements" element={<AchievementsPage/>}/>
        <Route path="/aboutus" element={<AboutUsPage/>}/>
        <Route path="/blogs/:id" element={<SingleBlogPage/>}/> 
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
