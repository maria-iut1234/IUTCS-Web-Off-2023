import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";

const EditBlogPage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSave = () => {
    console.log(input);
    console.log(id)

    // axios.post("/api/save-blog", { id, input })
    //   .then((response) => {
    //     console.log("Blog saved successfully", response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error saving blog", error);
    //   });
  };
  return (
    <>
      <div
        className={`flex flex-col min-h-screen admin-gradient-bg bg-cover bg-fixed bg-center`}
      >
        <div
          className="px-4 m-2 rounded-sm"
          style={{ backdropFilter: "blur(100px)" }}
        >
          <div className=" flex justify-between mx-auto py-1">
            <div>
              <div
                className="z-10 py-2"
                onClick={() => {
                  navigate(`/admin/blogs/${id}`);
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
              <div className="z-10 py-2" onClick={handleSave}>
                <button
                  type="button"
                  className="lg:px-12 md:px-6 px-6 relative -top-1 -left-1 bg-[#F4F2F0] py-1 px-5 font-medium text-md md:text-lg text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 flex items-center"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-4">
          <MDEditor
            value={input}
            onChange={setInput}
            className=" min-h-screen"
            style={{
              ".wMdEditorTextPre, .wMdEditorTextInput, .wMdEditorText>.wMdEditorTextPre":
                {
                  fontFamily: "'Poppins', sans-serif",
                },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default EditBlogPage;
