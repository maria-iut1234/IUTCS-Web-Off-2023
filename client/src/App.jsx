//react stuff
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//component imports
import AdminSignIn from "./pages/AdminSignIn";

//css import
import "./App.css";
import AdminHomepage from "./pages/AdminHomepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* admin routes  */}
        <Route path="/adminsignin" element={<AdminSignIn />} />
        <Route path="/adminhome" element={<AdminHomepage/>}/>

        {/* without login pages  */}
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
