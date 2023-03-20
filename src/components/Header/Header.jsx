import { Outlet, useNavigate, Link } from "react-router-dom";
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/LeanneGraham">ProfileSample</Link>
            </li>
            <li>
              <Link to="/1">PostSample</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
