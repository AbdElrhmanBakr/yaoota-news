import { Outlet, Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
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
              <Link to="/LeanneGraham">Profile Sample</Link>
            </li>
            <li>
              <Link to="posts/1">Post Sample</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
