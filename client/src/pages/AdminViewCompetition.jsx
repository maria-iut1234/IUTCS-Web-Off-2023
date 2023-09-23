import React from "react";
import Tab from "../components/Tab";
import AdminNavbar from "../components/AdminNavbar";
import ViewIntraUniversityCompetition from "../components/ViewIntraUniversityCompetition";
import ViewInterUniversityCompetition from "../components/ViewInterUniversityCompetition";

const AdminViewCompetition = () => {
  const tabItems = [
    {
      title: "Inter-University Competitions",
        component: <ViewInterUniversityCompetition />,
    },
    {
      title: "Intra-University Competitions",
        component: <ViewIntraUniversityCompetition />,
    },
  ];
  return (
    <>
      <div
        className={`flex flex-col min-h-screen admin-gradient-bg bg-cover bg-fixed bg-center`}
      >
        <AdminNavbar />

        <Tab items={tabItems} className="mt-2"/>
      </div>
    </>
  );
};

export default AdminViewCompetition;
