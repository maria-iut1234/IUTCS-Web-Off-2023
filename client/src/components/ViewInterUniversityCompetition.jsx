import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Table from "./Table";

const ViewInterUniversityCompetition = () => {
  const [selectedCompetition, setSelectedCompetition] = useState(null);

  //just some hardcoded data...delete this after integration
  const dropdownOptions = [
    {
      competition_id: "1",
      name: "Competition Type 1",
      description: "Description for Competition Type 1",
      date: "2023-09-16T00:00:00.000Z",
      competition_type: "team", // Added competition_type
    },
    {
      competition_id: "2",
      name: "Competition Type 2",
      description: "Description for Competition Type 2",
      date: "2023-09-17T00:00:00.000Z",
      competition_type: "individual", // Added competition_type
    },
    {
      competition_id: "3",
      name: "Competition Type 3",
      description: "Description for Competition Type 3",
      date: "2023-09-18T00:00:00.000Z",
      competition_type: "team", // Added competition_type
    },
  ];

  const participantsData = [
    {
      _id: 1,
      competition_id: "1",
      participant_name: "Participant 1",
      competition_name: "Competition Type 1",
      team_name: "Team A",
      team_size: 5,
      date_of_registration: "2023-09-15",
    },
    {
      _id: 2,
      competition_id: "1",
      participant_name: "Participant 2",
      competition_name: "Competition Type 1",
      team_name: "Team B",
      team_size: 3,
      date_of_registration: "2023-09-16",
    },
    {
      _id: 3,
      competition_id: "2",
      participant_name: "Participant 3",
      competition_name: "Competition Type 2",
      date_of_registration: "2023-09-17",
    },
    {
      _id: 4,
      competition_id: "3",
      participant_name: "Participant 4",
      competition_name: "Competition Type 3",
      team_name: "Team C",
      team_size: 4,
      date_of_registration: "2023-09-18",
    },
    {
      _id: 5,
      competition_id: "2",
      participant_name: "Participant 5",
      competition_name: "Competition Type 2",
      date_of_registration: "2023-09-19",
    },
  ];

  const handleCompetitionSelect = (value) => {
    setSelectedCompetition(value);
  };

  // Filter participantsData based on selectedCompetition
  const filteredParticipantsData = participantsData.filter((participant) =>
    selectedCompetition
      ? participant.competition_id === selectedCompetition.competition_id
      : 1
  );

  return (
    <div className="m-3 p-3 rounded-sm">
      <div className="flex flex-col space-y-1 mb-6">
        <label
          htmlFor="competition_name"
          className="block text-md text-white font-moderna-custom"
        >
          Competition Name
        </label>
        <Dropdown
          disabledOption={"Select A Competition.."}
          dropdownOptions={dropdownOptions}
          onSelect={handleCompetitionSelect}
        />
      </div>

      {selectedCompetition && (
        <Table
          data={filteredParticipantsData}
          selectedCompetition={selectedCompetition}
        />
      )}
    </div>
  );
};

export default ViewInterUniversityCompetition;
