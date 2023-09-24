import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Table from "./Table";

const ViewIntraUniversityCompetition = ({participants, competitions}) => {
  const [selectedCompetition, setSelectedCompetition] = useState(null); 
  

  const handleCompetitionSelect = (value) => {
    setSelectedCompetition(value);
  };

  // Filter participantsData based on selectedCompetition
  const filteredParticipantsData = participants.filter((participant) =>
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
          dropdownOptions={competitions}
          onSelect={handleCompetitionSelect}
        />
      </div>

      {selectedCompetition && (
        <Table data={filteredParticipantsData} selectedCompetition={selectedCompetition}/> 
      )}
    </div>
  );
};

export default ViewIntraUniversityCompetition;
