import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router";
import PopUp from "./PopUp";

const Table = ({ data, selectedCompetition }) => {
  console.log(data);
  console.log(selectedCompetition);
  if (!data || data.length === 0) {
    return (
      <div className="text-center w-full text-lg">No Participants Yet</div>
    );
  }

  const [visibleModal, setVisibleModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {visibleModal && (
        <PopUp
          message={
            "Are you sure you want to delete this entry? You cannot undo this action!"
          }
          redButtonText={"Delete"}
          redButtonFunction={() => {}}
          normalButtonText={"Cancel"}
          normalButtonFunction={() => setVisibleModal(false)}
          setModalVisibility={setVisibleModal}
        />
      )}
      <div className="w-full mb-4 xl:mb-0 mx-auto rounded-sm">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-sm border border-[#1c0122]">
          <div className="rounded-t mb-0 px-4 py-3">
            <div className="text-xl font-bold text-center text-[#1c0122]">
              Competition: {selectedCompetition.name}
            </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="table-auto items-center bg-transparent w-full border-collapse">
              <thead className="text-md">
                <tr>
                  {selectedCompetition.competition_type === "individual" && (
                    <>
                      <th className="px-6 bg-blueGray-50 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Participant Name
                      </th>
                    </>
                  )}
                  {selectedCompetition.competition_type === "team" && (
                    <>
                      <th className="px-6 bg-blueGray-50 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Team Name
                      </th>
                      <th className="px-6 bg-blueGray-50 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Team Size
                      </th>
                    </>
                  )}
                  <th className="px-6 bg-blueGray-50 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Date of Registration
                  </th>
                  <th className="px-6 bg-blueGray-50 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="text-md">
                {data.map((row) => (
                  <tr key={row._id}>
                    {selectedCompetition.competition_type === "individual" && (
                      <>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-blueGray-700">
                          {row.participant_name}
                        </td>
                      </>
                    )}
                    {selectedCompetition.competition_type === "team" && (
                      <>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-blueGray-700">
                          {row.team_name ? row.team_name : "---"}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-blueGray-700">
                          {row.team_size ? row.team_size : "---"}
                        </td>
                      </>
                    )}
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-blueGray-700">
                      {row.date_of_registration}
                    </td>
                    {/* actions row  */}
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-2xl">
                      <button
                        className="mr-4 text-blue-700"
                        onClick={() =>
                          selectedCompetition.competition_type === "team"
                            ? navigate(
                                `/admin/competitions/${row._id}/team/edit`
                              )
                            : navigate(
                                `/admin/competitions/${row._id}/participant/edit`
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
