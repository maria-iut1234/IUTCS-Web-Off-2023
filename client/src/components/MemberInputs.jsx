import React from "react";

const MemberInputs = ({ participantData, setParticipantData }) => {
  const memberInputs = [];

  for (let i = 1; i <= participantData.number_of_members; i++) {
    memberInputs.push(
      <div key={i}>
        <div className="flex flex-col space-y-1 mb-6">
          <label
            htmlFor={`member${i}_name`}
            className="block text-md text-white font-moderna-custom"
          >
            Member {i} Name
          </label>
          <input
            type="text"
            id={`member${i}_name`}
            name={`member${i}_name`}
            value={participantData[`member_${i}_name`] || ""}
            onChange={(e) =>
              setParticipantData({
                ...participantData,
                [`member_${i}_name`]: e.target.value,
              })
            }
            className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
            required
          />
        </div>
        <div className="flex flex-col space-y-1 mb-6">
          <label
            htmlFor={`member${i}_phone`}
            className="block text-md text-white font-moderna-custom"
          >
            Member {i} Phone
          </label>
          <input
            type="tel"
            id={`member${i}_phone`}
            name={`member${i}_phone`}
            value={participantData[`member_${i}_phone`] || ""}
            onChange={(e) =>
              setParticipantData({
                ...participantData,
                [`member_${i}_phone`]: e.target.value,
              })
            }
            className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
          />
        </div>
        <div className="flex flex-col space-y-1 mb-6">
          <label
            htmlFor={`member${i}_email`}
            className="block text-md text-white font-moderna-custom"
          >
            Member {i} Email
          </label>
          <input
            type="email"
            id={`member${i}_email`}
            name={`member${i}_email`}
            value={participantData[`member_${i}_email`] || ""}
            onChange={(e) =>
              setParticipantData({
                ...participantData,
                [`member_${i}_email`]: e.target.value,
              })
            }
            className="text-black py-2 px-4 border-2 border-[#02E1DC] focus:outline-none focus:border-[#02E1DC]"
          />
        </div>
      </div>
    );
  }

  return <>{memberInputs}</>;
};

export default MemberInputs;
