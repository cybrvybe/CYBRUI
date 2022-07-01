import React from "react";
import { testModalContent } from "../CybrModal/test";
import PortfolioLandingPage from "./index";

export default {
  title: "Portfolio/PortfolioLandingPage",
};

export const WithText = () => {
  const techInterests = ["Automation", "Data Science", "web Development"];
  return (
    <PortfolioLandingPage
      name="Alex Figueroa"
      numYearsProgrammingExperience={6}
      occupation="Full-Stack Software Engineer"
      tagline="I am a full-stack software engineer with a passion for building beautiful, responsive, and accessible web applications."
      technicalInterests={techInterests}
    />
  );
};
