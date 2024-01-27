import "./VideoDescription.scss";
import AvatarImg from "../../assets/Images/Mohan-muruge.jpg";
import CommentButton from "../Buttons/CommentButton";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import Avatar from "../Avatar/Avatar";

const VideoDescription = ({ featuredVideo }) => {
  const { title, channel, description, likes, views, commentData } =
    featuredVideo;
  {
    /*ConverTimestamp to Date Function*/
  }
  const convertTimeStampToDate = (timestamp) => {
    const now = new Date();
    const commentTime = new Date(timestamp);
    const timeDifference = now - commentTime;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return `${years} ${years === 1 ? "year" : "years"} ago`;
    } else if (months > 0) {
      return `${months} ${months === 1 ? "month" : "months"} ago`;
    } else if (days > 0) {
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else {
      return "just now";
    }
  };
  return (
    <section className="video">
      {/******************** Featured Video Information Container *******************/}
      <div className="video__info-container">
        <h1 className="video__title">{title}</h1>
        <section className="video__numbers">
          <div className="video__numbers-div">
            <p className="video__channel">By {channel} </p>
            <p className="video__number">07/11/2021</p>
          </div>
          <div className="video__numbers-div video__views-likes">
            <p className="video__number">
              <img src={viewsIcon}></img> {views}
            </p>
            <p className="video__number">
              <img src={likesIcon}></img> {likes}
            </p>
          </div>
        </section>
        <section className="video__description-container">
          <p className="video__description">{description}</p>
        </section>
      </div>
      {/*******************  Comment Form *************************/}
      <div className="video__comments-div">
        <p className="video__no-of-comments">
          {" "}
          {commentData?.length || 0} Comments
        </p>
        <section className="video__form-section">
          <div className="video__avatar-img">
            <Avatar/>
          </div>
          <form className="video__comment-form">
            <div>
              <p className="video__p">JOIN THE CONVERSATION</p>
              <textarea
                className="video__textarea"
                name="comment"
                placeholder="Add a new comment"
              ></textarea>
            </div>
            <CommentButton />
          </form>
        </section>
        <section>
          {/************************** Comments Section ********************/}
          {commentData &&
            commentData.map((comment) => (
              <div key={comment.id} className="comments__container">
                <img className="comments__container__avatar-img" alt={comment.title}></img>
                <div className="comments__container-comment-details">
                  <div className="comments__container-name-date">
                    <p className="comments__container-name">{comment.name}</p>
                    <p className="comments__container-date">
                      {convertTimeStampToDate(comment.timestamp)}
                    </p>
                  </div>
                  <div className="comments__container__comment">
                    <p>{comment.comment}</p>
                  </div>
                </div>
              </div>
            ))}
        </section>
      </div>
    </section>
  );
};
export default VideoDescription;
