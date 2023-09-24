import React, { useEffect, useState } from "react";
import Tab from "../components/Tab";
import AdminNavbar from "../components/AdminNavbar";
import ViewIntraUniversityCompetition from "../components/ViewIntraUniversityCompetition";
import ViewInterUniversityCompetition from "../components/ViewInterUniversityCompetition";
import ViewAllCompetitions from "../components/ViewAllCompetitions";

const AdminViewCompetitionPage = () => {
  const [allCompetitions, setAllCompetitions] = useState([]);
  const [allParticipants, setAllParticipants] = useState([]);
  const [intraCompetitions, setIntraCompetitions] = useState([]);
  const [interCompetitions, setInterCompetitions] = useState([]);
  const [intraParticipants, setIntraParticipants] = useState([]);
  const [interParticipants, setInterParticipants] = useState([]);
  //just some hardcoded data...delete this after integration
  useEffect(() => {
    // Simulate fetching data from the backend
    // You can replace this with actual API calls
    const fetchData = async () => {
      const competitions = [
        {
          competition_id: "1",
          name: "Competition Type 1",
          description: "Description for Competition Type 1",
          date: "2023-09-16T00:00:00.000Z",
          competition_scale: "inter",
          competition_type: "team", // Added competition_type
        },
        {
          competition_id: "2",
          name: "Competition Type 2",
          description: "Description for Competition Type 2",
          competition_scale: "intra",
          date: "2023-09-17T00:00:00.000Z",
          competition_type: "individual", // Added competition_type
        },
        {
          competition_id: "3",
          name: "Competition Type 3",
          competition_scale: "inter",
          description: "Description for Competition Type 3",
          date: "2023-09-18T00:00:00.000Z",
          competition_type: "team", // Added competition_type
        },
      ];

      const interParticipants = [
        {
          _id: 1,
          university_name: "IUT",
          competition_id: "1",
          team_name: "Team A",
          team_size: 5,
          date_of_registration: "2023-09-15",
        },
        {
          _id: 2,
          university_name: "IUT",
          competition_id: "1",
          team_name: "Team B",
          team_size: 3,
          date_of_registration: "2023-09-16",
        },

        {
          _id: 4,
          competition_id: "3",
          university_name: "IUT",
          team_name: "Team C",
          team_size: 4,
          date_of_registration: "2023-09-18",
        },

        {
          _id: 6,
          competition_id: "3",
          university_name: "IUT",
          team_name: "Team D",
          team_size: 4,
          date_of_registration: "2023-09-20",
        },
      ];

      const intraParticipants = [
        {
          _id: 5,
          competition_id: "2",
          participant_name: "Participant 5",
          date_of_registration: "2023-09-19",
        },
        {
          _id: 3,
          competition_id: "2",
          participant_name: "Participant 3",
          date_of_registration: "2023-09-17",
        },
      ];

      setAllCompetitions(competitions);

      // Separate competitions into inter and intra
      setInterCompetitions(
        competitions.filter(
          (competition) => competition.competition_scale === "inter"
        )
      );

      setIntraCompetitions(
        competitions.filter(
          (competition) => competition.competition_scale === "intra"
        )
      );

      // Separate participants into inter and intra
      setInterParticipants(interParticipants);
      setIntraParticipants(intraParticipants);
    };

    fetchData();
  }, []);

  const tabItems = [
    {
      title: "All Competitions",
      component: (
        <ViewAllCompetitions
          competitions={allCompetitions}
          participants={allParticipants}
        />
      ),
    },
    {
      title: "Inter-University Competitions",
      component: (
        <ViewInterUniversityCompetition
          competitions={interCompetitions}
          participants={interParticipants}
        />
      ),
    },
    {
      title: "Intra-University Competitions",
      component: (
        <ViewIntraUniversityCompetition
          competitions={intraCompetitions}
          participants={intraParticipants}
        />
      ),
    },
  ];

  return (
    <>
      <div
        className={`flex flex-col min-h-screen admin-gradient-bg bg-cover bg-fixed bg-center`}
      >
        <AdminNavbar />
        <Tab tabItems={tabItems} className="mt-2" />
      </div>
    </>
  );
};

export default AdminViewCompetitionPage;
