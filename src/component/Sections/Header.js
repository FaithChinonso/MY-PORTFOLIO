import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <a
        target="_blank"
        href="http://faithumunnakweresume.epizy.com/"
        className="header_link"
      >
        Resume
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="mailto:faithuchinonso@gmail.com"
        className="header_link"
      >
        Send a Mail
      </a>
    </div>
  );
};
export default Header;
