import "./Button.scss";
import icon from "../../assets/Icons/add_comment.svg";

const CommentButton = () => {
  return (
    <button className="button comment__button">
      <div className="button__div-icon">
        <img className="button__icon" src={icon}></img>
      </div>
      COMMENT
    </button>
  );
};

export default CommentButton;
