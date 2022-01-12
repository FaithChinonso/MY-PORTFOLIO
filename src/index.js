import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import ProjectPage from "./component/Pages/Projects";
import SkillPage from "./component/Pages/Skills";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/skills" element={<SkillPage />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
