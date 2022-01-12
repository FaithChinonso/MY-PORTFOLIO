import React from "react";
import "./style.css";
import Footer from "../../Sections/Footer";
import Header from "../../Sections/Header";
import SkillSet from "../../SkillSet";

const SkillPage = () => {
  return (
    <div className="skills">
      <Header />
      <div className="skills-body>">
        <SkillSet />
      </div>
      <Footer />
    </div>
  );
};
export default SkillPage;
