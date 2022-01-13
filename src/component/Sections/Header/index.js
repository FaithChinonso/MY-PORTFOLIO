import "./style.css";
import Navbar from "../../Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="header-picture">
        <img
          src={process.env.PUBLIC_URL + "/img/profilepicture.jpeg"}
          alt="profile"
          className="header-img"
        />
      </div>
      <Navbar />
    </div>
  );
};
export default Header;
