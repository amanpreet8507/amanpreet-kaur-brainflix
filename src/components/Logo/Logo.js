import logo from "../../assets/Logo/BrainFlix-logo.svg";
import "./Logo.scss";
const Logo = () => {
  return (
    <div className="nav__logo">
      <img src={logo} alt="LOGO" />
    </div>
  );
};

export default Logo;
