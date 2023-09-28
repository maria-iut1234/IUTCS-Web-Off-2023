import React from "react";

function LandingPageCard({ coverImgUrl, hoverImgUrl, header }) {
  return (
    <div className="md:p-1 mx-auto py-2">
      <div className="group overflow-hidden relative shadow-lg max-w-xs">
        <a href="#" className="absolute z-10 top-0 bottom-0 left-0 right-0"></a>
        <img
          className="block group-hover:opacity-40 transition-opacity duration-700"
          src={coverImgUrl}
          alt="Game Cover"
        />
        <div className="absolute bg-black flex items-center group-hover:-top-0 group-hover:opacity-80 duration-700 top-full right-0 w-full opacity-0 h-1/2 transition-all">
          <div
            className=""
            style={{
              backgroundImage: `url(${hoverImgUrl})`,
            }}
          >
            <img className="w-full" src={hoverImgUrl} alt="Hover Image" />
          </div>
        </div>
        <div className="absolute bg-gradient-to-br duration-500 from-[#002766] to-[#00002b] text-white block left-0 right-0 top-full text-base h-1/2 w-full opacity-50 transition-all group-hover:top-1/2 group-hover:opacity-100">
          <div className="py-4 text-xs px-7">
            <div className="text-3xl font-bold text-[#FCCD0D] pb-4">{header}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageCard;
