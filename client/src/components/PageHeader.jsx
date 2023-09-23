import React from "react";

const PageHeader = ({imageUrl, pageTitle}) => {
  return (
    <div className="block md:flex md:space-x-2 px-2 lg:p-0 w-full">
      <div
        className="mb-4 md:mb-0 w-full relative rounded inline-block"
        style={{ height: "24em" }}
      >
        <div
          className="absolute left-0 bottom-0 w-full h-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg, transparent, rgba(0,0,0,.7))",
          }}
        ></div>
        <img
          src={imageUrl}
          className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover opacity-50"
        />
        <div className="p-4 absolute bottom-20 left-0 z-20 w-full">
          <h2 className="text-5xl md:text-6xl text-center w-full font-semibold text-gray-100 leading-tight uppercase">
            {pageTitle}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
