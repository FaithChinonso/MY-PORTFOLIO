import HomePage from "../src/component/Pages/Home";
import ProjectPage from "./component/Pages/Projects";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
};

export default App;
