import "./Button.scss";
import icon from "../../assets/Icons/upload.svg";
import { Link } from "react-router-dom";
const UploadButton = () => {
  return (
    <Link to ="/uploadvideo" >
      <button className="button upload__button">
        <div className="button__div-icon">
          <img className="button__icon" src={icon}></img>
        </div>
        UPLOAD
      </button>
     </Link>
  );
};

export default UploadButton;
