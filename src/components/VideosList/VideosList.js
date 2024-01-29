import "./VideosList.scss";
import { Link } from "react-router-dom";

const VideosList = ({ videosData, currentVideo }) => {
  return (
    <section className="videos">
      <p className="videos__heading">NEXT VIDOES</p>
      {videosData.map((video) => {
        return (
           video.image !== currentVideo.image && (
            <Link to={`/${video.id}`} className="videos__link" key={video.title}>
            <li
              className="videos__list"              
            >
              {/* Video Image in Video List */}
              <img className="videos__image" src={video.image} alt={video.title}></img>
              <div className="videos__title-and-channel">
                {/* Video Title in Video List */}
                <p className="videos__title">{video.title}</p>
                {/* Video Channel in Video List */}
                <p className="videos__channel">{video.channel}</p>
              </div>
            </li>
            </Link>
            ));
      })}
    </section>
  );
};

export default VideosList;
