import logo from "../../assets/Logo/BrainFlix-logo.svg";
import "./Logo.scss";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="nav__logo">
      <Link to = "/" className="link">
        <div >
          <img src={logo} alt="LOGO" />
      </div>
      </Link>
    </div>
  );
};

export default Logo;
