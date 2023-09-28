import React from 'react'

const AboutUsCard = ({ textColor, header, description, iconColor }) => {
  return (
    <>
      <div class="pt-6 w-full md:w-1/2 lg:w-4/12 px-4 text-center">
        <div class="relative flex flex-col min-w-0 break-words mb-8 shadow-lg rounded-lg bg-blue-200 bg-opacity-30 p-6 drop-shadow-xl" style={{
          backdropFilter: "blur(15px)",
          boxShadow: "0 0 60px rgba(2, 225, 220, 0.4)",
        }}>
          <div class="px-4 py-5 flex-auto">
            <div class={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-${iconColor}`}>
              <i class="fa-solid fa-list"></i>
            </div>
            <h6 class={`text-xl text-${textColor} font-semibold`}>{header}</h6>
            <p class="mt-2 mb-4 text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUsCard