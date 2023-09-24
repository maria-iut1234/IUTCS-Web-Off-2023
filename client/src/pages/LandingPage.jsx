import React from "react";
import LandingPageNavbar from "../components/LandingPageNavbar";
import MaskingText from "../components/MaskingText";
import ActivitiesSection from "../components/ActivitiesSection";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <div
        className={`flex flex-col min-h-screen user-gradient-bg bg-cover bg-fixed bg-center`}
      >
        <LandingPageNavbar />
        <MaskingText />
        <ActivitiesSection />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
