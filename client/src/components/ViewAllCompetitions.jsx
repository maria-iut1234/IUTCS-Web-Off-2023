import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete, MdPostAdd } from "react-icons/md";
import PopUp from "./PopUp";
import { useNavigate } from "react-router-dom";

const ViewAllCompetitions = ({ competitions }) => {
  if (!competitions || competitions.length === 0) {
    return (
      <div className="text-center w-full text-lg">
        No Competitions added yet!
      </div>
    );
  }

  const [visibleModal, setVisibleModal] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {};
  return (
    <>
      <div className="m-3 p-3 rounded-sm">
        <div className="w-full mb-4 xl:mb-0 mx-auto rounded-sm">
          <div
            className="m-2 rounded-sm"
            style={{ backdropFilter: "blur(100px)" }}
          >
            <div className="max-w-screen-xl flex justify-end gap-4 md:gap-8 mx-auto py-1">
              <div>
                <div
                  className="z-10 p-2"
                  onClick={() => {
                    navigate("/admin/competitions/create");
                  }}
                >
                  <button
                    type="submit"
                    className="lg:px-6 md:px-4 px-4 relative -top-1 -left-1 bg-[#F4F2F0] py-1 px-5 font-medium text-md md:text-lg text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 flex items-center"
                  >
                    <div className="inline-block mr-2">
                      <MdPostAdd />
                    </div>
                    Add New Competition
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-sm border border-[#1c0122]">
            <div className="rounded-t mb-0 px-4 py-3">
              <div className="text-xl font-bold text-center text-[#1c0122]">
                All Competitions
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="table-auto items-center bg-transparent w-full border-collapse">
                <thead className="text-md">
                  <tr>
                    <th className="px-6 bg-blueGray-50 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Name
                    </th>
                    <th className="px-6 bg-blueGray-50 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Scale
                    </th>
                    <th className="px-6 bg-blueGray-50 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Type
                    </th>
                    <th className="px-6 bg-blueGray-50 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Date
                    </th>
                    <th className="px-6 bg-blueGray-50 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="text-md">
                  {competitions.map((row) => (
                    <>
                      {visibleModal && (
                        <PopUp
                          message={
                            "Are you sure you want to delete this entry? You cannot undo this action!"
                          }
                          redButtonText={"Delete"}
                          redButtonFunction={() => {
                            handleDelete(row.competition_id)
                          }}
                          normalButtonText={"Cancel"}
                          normalButtonFunction={() => setVisibleModal(false)}
                          setModalVisibility={setVisibleModal}
                        />
                      )}
                      <tr key={row._id}>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-blueGray-700">
                          {row.name}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-blueGray-700">
                          {row.competition_scale}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-blueGray-700">
                          {row.competition_type}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-blueGray-700">
                          {new Date(row.date).toLocaleDateString("en-US", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        {/* actions row  */}
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-2xl">
                          <button
                            className="mr-4 text-blue-700"
                            onClick={() =>
                              navigate(
                                `/admin/competitions/${row.competition_id}/edit`
                              )
                            }
                          >
                            <BiEdit />
                          </button>
                          <button
                            className="text-red-700"
                            onClick={() => setVisibleModal(true)}
                          >
                            <MdOutlineDelete />
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAllCompetitions;
