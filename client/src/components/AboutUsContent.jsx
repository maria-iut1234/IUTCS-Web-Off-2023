import React from 'react'
import AboutUsCard from './AboutUsCard'


const AboutUsContent = ({ admin }) => {
  const textColor = admin ? "[#02e1dc]" : "[#FCCD0D]"
  const aboutUsCardContent =
    [
      {
        header: "Blogs",
        description: "Read blogs published by the executives at IUTCS. Learn about all the new events and happenings.",
        iconColor: "green-400",
      }, {
        header: "Activities",
        description: " Attend our ACM, WebDev, AppDev, Research Seminars for experiences that can benefit your career and personal development.",
        iconColor: "yellow-400",
      },
      {
        header: "Events",
        description: "Register for any upcoming exciting Event organized by IUTCS. Remember, you lose every shot you don't take.",
        iconColor: "blue-400",
      },
      {
        header: "Vision",
        description: "Allow students to become more involved in the field of computer science.",
        iconColor: "purple-400",
      }, {
        header: "Research",
        description: "Members engage in groundbreaking research, contributing to advancements in AI, cybersecurity, data science, and more.",
        iconColor: "orange-400",
      },
      {
        header: "Achievements",
        description: "View all the latest achievements of the IUTCS family. We are proud of our members and their achievements.",
        iconColor: "red-400",
      },
    ]
  return (
    <>
      <div
        className="mx-auto px-4 sm:px-6 pt-12 pt-6"
      >
        <div class="flex flex-wrap" >
          {aboutUsCardContent.map((item, index) => (
            <AboutUsCard
              key={index}
              textColor={textColor}
              header={item.header}
              description={item.description}
              iconColor={item.iconColor}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default AboutUsContent
