import "./style.css";
import react, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <nav className="navigation">
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <FontAwesomeIcon icon={faTimes} className="navigation-icon" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="navigation-icon" />
        )}
      </button>
      <ul className="responsive-nav">
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
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
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
    </nav>
  );
};
export default Navbar;
