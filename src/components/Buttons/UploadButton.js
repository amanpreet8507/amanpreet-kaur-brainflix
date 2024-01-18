import "./Button.scss";
import icon from "../../assets/Icons/upload.svg";
const UploadButton = () => {
  return (
    <button className="button">
      <div className="button__div-icon">
      <img className="button__icon" src={icon}></img>
      </div>
      UPLOAD
    </button>
  );
};

export default UploadButton;
