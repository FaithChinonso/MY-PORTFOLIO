import React from "react";
import "./style.css";
import Footer from "../../Sections/Footer";
import Header from "../../Sections/Header";

const HomePage = () => {
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
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
