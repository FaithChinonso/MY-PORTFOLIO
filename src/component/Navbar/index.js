import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="navigation">
      <li className="navigation-list">
        <Link to="/" className="navigation-link">
          Home
        </Link>
      </li>
      <li className="navigation-list">
        <Link to="/skills" className="navigation-link">
          Skills
        </Link>
      </li>
      <li className="navigation-list">
        <Link to="/projects" className="navigation-link">
          Projects
        </Link>
      </li>
      <li className="navigation-list">
        <a
          target="_blank"
          rel="noreferrer"
          href="http://faithumunnakweresume.epizy.com/"
          className="navigation-link"
        >
          Resume
        </a>
      </li>
      <li className="navigation-list">
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:faithuchinonso@gmail.com"
          className="navigation-link"
        >
          Mail
        </a>
      </li>
    </ul>
  );
};
export default Navbar;
