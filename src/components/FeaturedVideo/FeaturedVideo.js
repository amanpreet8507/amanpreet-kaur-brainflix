import "./FeaturedVideo.scss";
import PlayIcon from "../../assets/Icons/play.svg";
import FullScreenIcon from "../../assets/Icons/fullscreen.svg";
import VolumeUpIcon from "../../assets/Icons/volume_up.svg";

const FeaturedVideo = ({ currentVideo }) => {

  const { image } = currentVideo;
  
  return (
    <>
      {/************************* Featured Video on screen ***************/}
      <div className="video__container">
        <video className="video__image" poster={image} controls width="400" height="300">
        </video>
      </div>
    </>
  );
};

export default FeaturedVideo;
