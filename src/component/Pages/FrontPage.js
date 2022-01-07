import React, { useState } from "react";
import "./FrontPage.css";
import Footer from "../Sections/Footer";
import Header from "../Sections/Header";
import ProjectPage from "./ProjectPage";

const FrontPage = () => {
  // const openProjectsHandler = () => {
  //   return <ProjectPage />;
  // };
  return (
    <div className="profile">
      <Header />
      <div className="profile-body">
        <div className="profile-body_text">
          <h1>
            <span className="profile-body_highlight">Hi, I'm Faith.</span> A
            FrontEnd Developer based in Lagos, Nigeria. Currently looking to
            obtain a challenging IT internship
          </h1>
        </div>

        {/* <a href="" className="profile-body_link">
          Projects
        </a> */}
      </div>
      <Footer />
    </div>
  );
};

export default FrontPage;
