import "./style.css";
// import { fontawesomeicons }
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faCodepen,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        I'm always happy to talk,
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:faithuchinonso@gmail.com"
          className="footer-link"
        >
          Get in Touch
        </a>
      </p>

      <ul className="footer-list">
        <li>
          <a
            target="_blank"
            href="https://github.com/FaithChinonso"
            className="footer-links"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/faith-umunnakwe-095905161"
            className="footer-links"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://codepen.io/faithchinonso"
            className="footer-links"
          >
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.instagram.com/faychiny"
            className="footer-links"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
