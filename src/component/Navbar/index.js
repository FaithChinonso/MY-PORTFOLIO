import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="navigation">
      <li className="navigation-list">
        <Link to="/skills">Skills</Link>
      </li>
      <li className="navigation-list">
        <Link to="/projects" className="navigation-link">
          Projects
        </Link>
      </li>
      <li className="navigation-list">
        <a
          target="_blank"
          href="http://faithumunnakweresume.epizy.com/"
          className="header_link"
        >
          Resume
        </a>
      </li>
      <li className="navigation-list">
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:faithuchinonso@gmail.com"
          className="header_link"
        >
          Send a Mail
        </a>
      </li>
    </ul>
  );
};
export default Navbar;
