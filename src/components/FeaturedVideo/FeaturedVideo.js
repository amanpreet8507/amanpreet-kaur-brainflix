import "./FeaturedVideo.scss";
import PlayIcon from "../../assets/Icons/play.svg";
import FullScreenIcon from "../../assets/Icons/fullscreen.svg";
import VolumeUpIcon from "../../assets/Icons/volume_up.svg";

const FeaturedVideo = ({ currentVideo }) => {
  const {
    image,
    duration,
  } = currentVideo;
  return (
    <>
      {/************************* Featured Video on screen ***************/}
      <div className="video__container">
        <div className="video__image-and-duration">
          <img className="video__image" src={image}></img>
          <div className="video__icons">
            <div className="video__icon-div">
              <img className="video__icon" src={PlayIcon}></img>
            </div>
            <div className="video__duration">
              <div className="video__duration-line"></div>
              <p className="video__duration-time">0:00/{duration}</p>
            </div>
            <div className="video__icon-div">
              <img
                className="video__icon video__full-screen-icon"
                src={FullScreenIcon} alt="icon"
              ></img>
              <img className="video__volume-icon" alt="icon" src={VolumeUpIcon}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedVideo;
