import { Outlet } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <Logo />
        <div className="navbar-ico">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className="navbar-container">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
