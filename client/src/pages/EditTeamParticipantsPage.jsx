import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import generateMemberInputs from "../components/MemberInputs";
import MemberInputs from "../components/MemberInputs";

export const EditTeamParticipantsPage = () => {
  const { id } = useParams();
  const [participantData, setParticipantData] = useState({
    // Initialize with default values to avoid issues with controlled inputs
    _id: null,
    competition_id: "",
    competition_name: "",
    team_name: "",
    number_of_members: 0,
    date_of_registration: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Define a function to fetch participant data by ID (replace with actual API call)
    const fetchParticipantData = async (id) => {
      try {
        // Replace with actual API call to fetch participant data by ID
        // Example: const response = await fetch(`/api/participants/${id}`);
        // const data = await response.json();
        const data = {
          _id: 1,
          competition_id: "1",
          competition_name: "Competition Type 1",
          team_name: "Team A",
          number_of_members: 3,
          date_of_registration: "2023-09-15",
          member_1_name: "John Doe",
          member_1_email: "John@gmail.com",
          member_1_phone: "123-456-7890",
          member_2_name: "Jane Smith",
          member_2_email: "Jane@gmail.com",
          member_2_phone: "987-654-3210",
          member_3_name: "Bob Johnson",
          member_3_email: "Bob@gmail.com",
          member_3_phone: "555-555-5555",
        };

        // Update the participant data state
        setParticipantData(data);
      } catch (error) {
        console.error("Error fetching participant data:", error);
      }
    };

    if (id) {
      fetchParticipantData(id);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new object to store the data of selected members
    const selectedMembersData = {
      _id: participantData._id,
      competition_id: participantData.competition_id,
      competition_name: participantData.competition_name,
      team_name: participantData.team_name,
      number_of_members: participantData.number_of_members,
      date_of_registration: participantData.date_of_registration,
    };

    // Add member data to the object
    for (let i = 1; i <= participantData.number_of_members; i++) {
      selectedMembersData[`member_${i}_name`] =
        participantData[`member_${i}_name`];
      selectedMembersData[`member_${i}_email`] =
        participantData[`member_${i}_email`] || "";
      selectedMembersData[`member_${i}_phone`] =
        participantData[`member_${i}_phone`];
    }

    // Now, you can send `selectedMembersData` to the backend
    console.log(selectedMembersData);
  };

  return (
    <>
      <div
        className={`flex flex-col min-h-screen admin-gradient-bg bg-cover bg-fixed bg-center`}
      >
        <div className="mx-3 sm:mx-10 md:mx-40 lg:mx-80">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div
              className="px-2 md:px-4 m-2 rounded-sm"
              style={{ backdropFilter: "blur(20px)" }}
            >
              <div className="flex justify-between mx-auto py-1">
                <div>
                  <div
                    className="z-10 py-2"
                    onClick={() => {
                      navigate(`/admin/competitions`);
                    }}
                  >
                    <button
                      type="button"
                      className="lg:px-12 md:px-6 px-6 relative -top-1 -left-1 bg-[#F4F2F0] py-1 px-5 font-medium text-md md:text-lg text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 flex items-center"
                    >
                      Back
                    </button>
                  </div>
                </div>

                <div>
                  <div className="z-10 py-2">
                    <button
                      type="submit"
                      className="lg:px-6 md:px-3 px-1 relative -top-1 -left-1 bg-[#F4F2F0] py-1 px-5 font-medium text-md md:text-lg text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 flex items-center"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h1 className="mb-2 text-5xl font-semibold text-white text-shadow-custom font-moderna-custom">
                Edit Team Details
              </h1>
            </div>

            <div className="flex flex-col space-y-1 mb-6">
              <label
                htmlFor="teamName"
                className="block text-md text-white font-moderna-custom"
              >
                Team Name
              </label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                value={participantData.team_name}
                onChange={(e) =>
                  setParticipantData({
                    ...participantData,
                    team_name: e.target.value,
                  })
                }
                className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
                required
              />
            </div>

            <div className="flex flex-col space-y-1 mb-6">
              <label
                htmlFor="numMembers"
                className="block text-md text-white font-moderna-custom"
              >
                Number of Members
              </label>
              <input
                type="number"
                id="numMembers"
                name="numMembers"
                value={participantData.number_of_members}
                onChange={(e) =>
                  setParticipantData({
                    ...participantData,
                    number_of_members: parseInt(e.target.value, 10),
                  })
                }
                className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
                required
              />
            </div>

            {/* Generate member input fields */}
            <MemberInputs
              participantData={participantData}
              setParticipantData={setParticipantData}
            />
          </form>
        </div>
      </div>
    </>
  );
};
