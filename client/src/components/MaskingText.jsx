import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LottiePlayer from "react-lottie-player";
import landing_page from "../assets/landing_page.json";
import { TypeAnimation } from "react-type-animation";

const MaskingText = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "[#FCCD0D]",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <div className="md:flex w-full space-x-8 mx-auto">
        <div className="w-full md:w-1/2 flex justify-center items-center space-x-8">
          <LottiePlayer
            loop={true}
            animationData={landing_page}
            play
            speed={1}
            className={"w-full"}
          />
        </div>
        <div className="flex justify-center items-center h-screen hide-cursor">
          <div>
            <h1
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="font-digital7-custom px-10 md:px-20 py-10 text-white text-9xl transition-colors duration-300 hover:text-[#FCCD0D]"
            >
              {`I U T C S`}
            </h1>
            <div
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="max-w-screen md:ml-24 ml-10 mb-6 text-4xl lg:text-[36px] leading-[1] md:leading-[0.5]"
            >
              <span className="mr-4 text-white">Join us and</span>
              <TypeAnimation
                sequence={[
                  "Innovate",
                  2000,
                  "Unite",
                  2000,
                  "Thrive",
                  2000,
                  "Collaborate",
                  2000,
                  "Succeed",
                  2000,
                ]}
                speed={70}
                className="text-[#d84339]"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
          </div>
          <motion.div
            className="bg-[#FCCD0D] h-5 w-5 rounded-full fixed left-0 top-0 hide-cursor pointer-events-none"
            variants={variants}
            animate={cursorVariant}
          />
        </div>
      </div>
    </>
  );
};

export default MaskingText;
