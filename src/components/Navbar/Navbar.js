import "./Navbar.scss";
import Logo from "../Logo/Logo";
import UploadButton from "../Buttons/UploadButton";
import Avatar from "../Avatar/Avatar";
import SearchIcon from "../../assets/Icons/search.svg";

function Navbar() {
  return (
    <nav className="nav">
      <Logo />
      <form className="nav__form">
        <div className="nav__span-and-avatar">
          <div className="nav__search">
            <span className="nav__search-icon">
              <img src={SearchIcon} alt="Icon" />
            </span>
            <input
              type="search"
              className="nav__input"
              placeholder="Search"
            ></input>
          </div>
          <Avatar />
        </div>
      </form>
      <UploadButton />
    </nav>
  );
}

export default Navbar;
