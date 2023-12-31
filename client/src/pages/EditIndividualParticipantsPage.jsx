import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditIndividualParticipantsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [participantData, setParticipantData] = useState({
    // Initialize with default values to avoid issues with controlled inputs
    _id: null,
    competition_id: "",
    competition_name: "",
    participant_name: "",
    contact_number: "",
    date_of_registration: "",
  });
  const [universityName, setUniversityName] = useState("");

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
          participant_name: "Participant 1",
          contact_number: "016023123213",
          date_of_registration: "2023-05-19T16:43:42.404+00:00",
        };
        // Update the participant data state
        setParticipantData(data);
        setUniversityName(data.university_name ? data.university_name : "");
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
    console.log(id);
    console.log(participantData);
  };

  const handleFieldChange = (e, field) => {
    const newVal = e.target.value;
    setParticipantData({
      ...participantData,
      [field]: newVal,
    });
  };

  return (
    <>
      <div
        className={`flex flex-col min-h-screen admin-gradient-bg bg-cover bg-fixed bg-center`}
      >
        <div className="mx-3 sm:mx-10 md:mx-40 lg:mx-80 mt-4">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div
              className="px-4 m-2 rounded-sm"
              style={{ backdropFilter: "blur(100px)" }}
            >
              <div className=" flex justify-between mx-auto py-1">
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
                      className="lg:px-12 md:px-6 px-6 relative -top-1 -left-1 bg-[#F4F2F0] py-1 px-5 font-medium text-md md:text-lg text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 flex items-center"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h1 className="mb-2 text-5xl font-semibold text-white text-shadow-custom font-moderna-custom">
                Edit Participant Details
              </h1>
            </div>
            <div className="flex flex-col space-y-1 mb-6">
              <label
                htmlFor="title"
                className="block text-md text-white font-moderna-custom"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={participantData.participant_name}
                onChange={(e) => handleFieldChange(e, "participant_name")}
                className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
                placeholder="John Doe"
                required
              />
            </div>
            {universityName && (
              <div className="flex flex-col space-y-1 mb-6">
                <label
                  htmlFor="title"
                  className="block text-md text-white font-moderna-custom"
                >
                  University
                </label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  value={universityName}
                  onChange={setUniversityName}
                  className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
                  placeholder="John Doe"
                  required
                />
              </div>
            )}
            <div className="flex flex-col space-y-1 mb-6">
              <label
                htmlFor="title"
                className="block text-md text-white font-moderna-custom"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={participantData.participant_email}
                onChange={(e) => handleFieldChange(e, "participant_email")}
                className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
                placeholder="JohnDoe@gmail.com"
                required
              />
            </div>
            <div className="flex flex-col space-y-1 mb-6">
              <label
                htmlFor="title"
                className="block text-md text-white font-moderna-custom"
              >
                Contact Number
              </label>
              <input
                type="number"
                id="number"
                name="number"
                value={participantData.contact_number}
                onChange={(e) => handleFieldChange(e, "contact_number")}
                className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
                placeholder="This is a blog"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditIndividualParticipantsPage;
