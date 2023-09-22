import React from "react";

const PopUp = ({
  message,
  redButtonText,
  normalButtonText,
  setModalVisibility,
  redButtonFunction,
  normalButtonFunction,
}) => {
  return (
    <>
      <div
        id="popup-modal"
        tabIndex="-1"
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full "
      >
        <div className="fixed inset-0 bg-[#9DC3C2] opacity-50 backdrop-blur-sm"></div>
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-black rounded-sm shadow">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-white bg-transparent hover:bg-[#7d004d] hover:text-white rounded-lg text-lg p-1 ml-auto inline-flex items-center "
              data-modal-hide="popup-modal"
              onClick={() => {
                setModalVisibility(false);
              }}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center items-center">
              <svg
                className="mx-auto mb-4 text-white w-14 h-14"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="mb-5 text-lg font-normal text-white">
                {message}
              </h3>

              <div className="flex justify-center gap-4">
                <div className="z-10 p-2">
                  <button
                    type="submit"
                    className="lg:px-6 md:px-4 px-4 relative -top-1 -left-1 bg-[#F4F2F0] py-1 px-5 font-medium text-md md:text-lg text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0"
                    onClick={() => {
                      normalButtonFunction();
                    }}
                  >
                    {normalButtonText}
                  </button>
                </div>
                <div className="z-10 p-2">
                  <button
                    type="submit"
                    className="lg:px-6 md:px-4 px-4 relative -top-1 -left-1 bg-[#F4F2F0] py-1 px-5 font-medium text-md md:text-lg text-red-700 transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0"
                    onClick={() => {
                      redButtonFunction();
                    }}
                  >
                    {redButtonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
