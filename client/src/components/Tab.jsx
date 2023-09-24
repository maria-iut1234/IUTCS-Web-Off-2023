import React, { useState } from "react";

const Tabs = ({ tabItems }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <div className="">
        <div className="flex flex-col sm:flex-row">
          {tabItems.map((item, index) => (
            <button
              key={index}
              className={`py-4 px-6 block focus:outline-none ${
                activeTab === index
                  ? " border-b-2 border-[#02e1dc] text-[#02e1dc]"
                  : "border-transparent text-white"
              } hover:border-[#02e1dc] text-xl text-center`}
              onClick={() => handleTabClick(index)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <div id="myTabContent">
        {tabItems.map(
          (item, index) =>
            activeTab === index && (
              <div
                key={index}
                id={`tab-${index}`}
                role="tabpanel"
                aria-labelledby={`tab-${index}-tab`}
              >
                {item.component}
              </div>
            )
        )}
      </div>{" "}
    </>
  );
};

export default Tabs;
