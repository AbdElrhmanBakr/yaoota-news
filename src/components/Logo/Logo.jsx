import Tilt from "react-parallax-tilt";
import "./Logo.css";

const Logo = () => {
  return (
    <Tilt className="logo-container">
      <img className="logo-img" src="./assets/logo.png" alt="Logo" />
    </Tilt>
  );
};

export default Logo;
