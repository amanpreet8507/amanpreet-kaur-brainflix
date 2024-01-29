import "./Button.scss";
import icon from "../../assets/Icons/publish.svg";
import { Link } from "react-router-dom";
const PublishButton = () => {
    const handleSubmit = () => {
        alert('Video successfully uploaded!')
    }
  return (
    <div className="button__publish-and-cancel">
        <Link to ="/" >
                <button className="button" onClick={handleSubmit}>
                    <div className="button__div-icon">
                    <img className="button__icon" src={icon}></img>
                    </div>
                    PUBLISH
                </button>
        </Link>
        <Link to ="/" >
            <button className="cancel-button">
                CANCEL
            </button>
        </Link>
     </div>
  );
};

export default PublishButton;