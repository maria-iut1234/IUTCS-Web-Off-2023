import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//css file import
import './App.css'

// Component imports
import AdminSignIn from "./pages/AdminSignIn";
import AdminHomepage from "./pages/AdminHomepage";
import LandingPage from "./pages/LandingPage";
import BlogPage from "./pages/BlogPage";
import SingleBlogPage from "./pages/SingleBlogPage";
import ExecutivesInfoPage from "./pages/ExecutivesInfoPage";
import EditBlogPage from "./pages/EditBlogPage";
import AboutUsPage from "./pages/AboutUsPage";
import AdminViewCompetitionPage from "./pages/AdminViewCompetitionPage";
import CreateBlogPage from "./pages/CreateBlogPage";
import EditTeamParticipantsPage from "./pages/EditTeamParticipantsPage";
import EditIndividualParticipantsPage from "./pages/EditIndividualParticipantsPage";
import AchievementsPage from "./pages/AchievementsPage";
import CreateAchievementPage from "./pages/CreateAchievementPage";
import EditAchievementPage from "./pages/EditAchievementPage";
import EditCompetitionsPage from "./pages/EditCompetitionsPage";
import AddAdminPage from "./pages/AddAdminPage";
import EditExecutivePage from "./pages/EditExecutivePage";

function App() {
  //single point of checking for user type
  const admin = false; 
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin routes */}
        <Route path="/admin/home" element={<AdminUser admin={admin}><AdminHomepage  admin={admin}/></AdminUser>} />
        <Route path="/admin/blogs" element={<AdminUser admin={admin}><BlogPage  admin={admin}/></AdminUser>} />
        <Route path="/admin/aboutus" element={<AdminUser admin={admin}><AboutUsPage  admin={admin}/></AdminUser>} />
        <Route path="/admin/competitions/create" element={<AdminUser admin={admin}><EditCompetitionsPage  admin={admin}/></AdminUser>} />
        <Route path="/admin/competitions/:id/edit" element={<AdminUser admin={admin}><EditCompetitionsPage  admin={admin}/></AdminUser>} />
        <Route path="/admin/competitions" element={<AdminUser admin={admin}><AdminViewCompetitionPage  admin={admin}/></AdminUser>} />
        <Route path="/admin/competitions/:id/team/edit" element={<AdminUser admin={admin}><EditTeamParticipantsPage  admin={admin}/></AdminUser>} />
        <Route path="/admin/competitions/:id/participant/edit" element={<AdminUser admin={admin}><EditIndividualParticipantsPage  admin={admin}/></AdminUser>} />
        <Route path="/admin/executives" element={<AdminUser admin={admin}><ExecutivesInfoPage  admin={admin}/></AdminUser>} />
        <Route path="/admin/executives/create" element={<AdminUser admin={admin}><EditExecutivePage  admin={admin}/></AdminUser>} />
        <Route path="/admin/executives/:id/edit" element={<AdminUser admin={admin}><EditExecutivePage  admin={admin}/></AdminUser>} />
        <Route path="/admin/achievements" element={<AdminUser admin={admin}><AchievementsPage  admin={admin}/></AdminUser>} />
        <Route path="/admin/achievements/:id/edit" element={<AdminUser admin={admin}><EditAchievementPage  admin={admin}/></AdminUser>} />
        <Route path="/admin/achievements/create" element={<AdminUser admin={admin}><CreateAchievementPage  admin={admin}/></AdminUser>} />
        <Route path="/admin/blogs/:id/edit" element={<AdminUser admin={admin}><EditBlogPage  admin={admin}/></AdminUser>} />
        <Route path="/admin/blogs/:id" element={<AdminUser admin={admin}><SingleBlogPage  admin={admin}/></AdminUser>} />
        <Route path="/admin/blogs/create" element={<AdminUser admin={admin}><CreateBlogPage  admin={admin}/></AdminUser>} />
        <Route path="/admin/add" element={<AdminUser admin={admin}><AddAdminPage  admin={admin}/></AdminUser>} />

        {/* Public routes */}
        <Route path="/admin/signin" element={<PublicUser admin={admin}><AdminSignIn  admin={admin}/></PublicUser>} />
        <Route path="/" element={<PublicUser admin={admin}><LandingPage  admin={admin}/></PublicUser>} />
        <Route path="/aboutus" element={<PublicUser admin={admin}><AboutUsPage  admin={admin}/></PublicUser>} />
        <Route path="/executives" element={<PublicUser admin={admin}><ExecutivesInfoPage  admin={admin}/></PublicUser>} />
        <Route path="/achievements" element={<PublicUser admin={admin}><AchievementsPage  admin={admin}/></PublicUser>} />
        <Route path="/aboutus" element={<PublicUser admin={admin}><AboutUsPage  admin={admin}/></PublicUser>} />
        <Route path="/blogs/:id" element={<PublicUser admin={admin}><SingleBlogPage  admin={admin}/></PublicUser>} />
        <Route path="/blogs" element={<PublicUser admin={admin}><BlogPage  admin={admin}/></PublicUser>} />
      </Routes>
    </BrowserRouter>
  );
}

function PublicUser({ children, admin }) {
  if (admin === null || admin === undefined || admin === false) {
    return <>{children}</>;
  } else {
    return <Navigate to="/admin/home" />;
  }
}

function AdminUser({ children, admin }) {
  if (admin !== null && admin !== undefined && admin === true) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
}

export default App;
