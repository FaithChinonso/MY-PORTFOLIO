import React from "react";
import "./style.css";
import Footer from "../../Sections/Footer";
import Header from "../../Sections/Header";
import Slider from "../../Slider";
const ProjectPage = () => {
  return (
    <div className="projects">
      <Header />
      <div className="projects-body>">
        <Slider />
      </div>
      <Footer />
    </div>
  );
};
export default ProjectPage;
