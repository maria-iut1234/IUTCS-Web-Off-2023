//react stuff
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//component imports

//css import
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* admin routes  */}

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

// function AdminUser ({children}){
//   //is user;
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
// }
