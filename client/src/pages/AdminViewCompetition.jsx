import React from "react";
import Tab from "../components/Tab";
import AdminNavbar from "../components/AdminNavbar";

const AdminViewCompetition = () => {
  const tabItems = [
    {
      title: "Inter-University Competitions",
      //   component: <ContributeForms />,
    },
    {
      title: "Intra-University Competitions",
      //   component: <ViewContribution />,
    },
  ];
  return (
    <>
      <div
        className={`flex flex-col min-h-screen admin-gradient-bg bg-cover bg-fixed bg-center`}
      >
        <AdminNavbar />

        <Tab items={tabItems} />
      </div>
    </>
  );
};

export default AdminViewCompetition;
