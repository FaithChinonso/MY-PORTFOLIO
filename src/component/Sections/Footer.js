import "./Footer.css";

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
            GitHub
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/faith-umunnakwe-095905161"
            className="footer-links"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://codepen.io/faithchinonso"
            className="footer-links"
          >
            CodePen
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.instagram.com/faychiny"
            className="footer-links"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
