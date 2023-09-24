import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useNavigate, useParams } from "react-router-dom";

const EditCompetitionsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [competitionData, setCompetitionData] = useState({
    // Initialize with default values to avoid issues with controlled inputs
    competition_id: "",
    name: "",
    description: "",
    date: "",
    competition_scale: "",
    competition_type: "",
    form_link: "",
  });
  const [description, setDescription] = useState(competitionData.description);

  useEffect(() => {
    // Define a function to fetch participant data by ID (replace with actual API call)
    const fetchComeptitionData = async (id) => {
      try {
        // Replace with actual API call to fetch participant data by ID
        // Example: const response = await fetch(`/api/participants/${id}`);
        // const data = await response.json();
        const data = {
          competition_id: "1",
          name: "Competition Type 1",
          description: "Description for *Competition Type 1*",
          date: "2023-09-16T00:00:00.000Z",
          competition_scale: "inter",
          competition_type: "team",
          form_link:"example_link"
        };
        // Update the participant data state
        setCompetitionData(data);
        setDescription(data.description ? data.description : "");
      } catch (error) {
        console.error("Error fetching competition data:", error);
      }
    };

    if (id) {
      fetchComeptitionData(id);
    }
  }, [id]);

  const handleFieldChange = (e, field) => {
    const newVal = e.target.value;
    setCompetitionData({
      ...competitionData,
      [field]: newVal,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    console.log(competitionData);
    console.log(description);
  };

  return (
    <>
      <div
        className={`flex flex-col min-h-screen admin-gradient-bg bg-cover bg-fixed bg-center`}
      >
        <div className="mx-3 sm:mx-10 md:mx-40 lg:mx-80 mt-4">
          <form className="space-y-4 mb-3" onSubmit={handleSubmit}>
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
                {id? "Edit Competition Details" : "Add A New Competition"}
              </h1>
            </div>
            <div className="flex flex-col space-y-1 mb-6">
              <label
                htmlFor="name"
                className="block text-md text-white font-moderna-custom"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={competitionData.name}
                onChange={(e) => handleFieldChange(e, "name")}
                className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
                placeholder="Hackathon 2.0"
                required
              />
            </div>
            <div className="w-full pb-2">
              <label
                htmlFor="description"
                className="block text-md text-white font-moderna-custom mb-2"
              >
                Description
              </label>
              <MDEditor
                value={description}
                onChange={setDescription}
                style={{
                  ".wMdEditorTextPre, .wMdEditorTextInput, .wMdEditorText>.wMdEditorTextPre":
                    {
                      fontFamily: "'Poppins', sans-serif",
                    },
                }}
              />
            </div>
            <div className="flex flex-col space-y-1 mb-6">
              <label
                htmlFor="title"
                className="block text-md text-white font-moderna-custom"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={competitionData.date}
                onChange={(e) => handleFieldChange(e, "date")}
                className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
                placeholder="24-06-2023"
              />
            </div>

            <div className="flex flex-col space-y-1 mb-6">
              <label
                htmlFor="type"
                className="block text-md text-white font-moderna-custom"
              >
                Type
              </label>
              <input
                type="text"
                id="type"
                name="type"
                value={competitionData.competition_type}
                onChange={(e) => handleFieldChange(e, "competition_type")}
                className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
                placeholder="team/individual"
              />
            </div>

            <div className="flex flex-col space-y-1 mb-6">
              <label
                htmlFor="scale"
                className="block text-md text-white font-moderna-custom"
              >
                Scale
              </label>
              <input
                type="text"
                id="scale"
                name="scale"
                value={competitionData.competition_scale}
                onChange={(e) => handleFieldChange(e, "competition_scale")}
                className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
                placeholder="inter/intra"
              />
            </div>

            <div className="flex flex-col space-y-1 mb-6">
              <label
                htmlFor="scale"
                className="block text-md text-white font-moderna-custom"
              >
                Google Form
              </label>
              <input
                type="link"
                id="link"
                name="link"
                value={competitionData.form_link}
                onChange={(e) => handleFieldChange(e, "form_link")}
                className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
                placeholder="your embedded google form link"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditCompetitionsPage;
