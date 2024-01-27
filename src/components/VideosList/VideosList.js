import "./VideosList.scss";
import { Link, useParams } from "react-router-dom";
const VideosList = ({ videoDataArr, featuredVideo, changeVideo }) => {
  const {videoId} = useParams()

  // const videoPlaying = videoDataArr.find(video=> video.id === videoId)
  
  return (
    <section className="videos">
      <p className="videos__heading">NEXT VIDOES</p>
      {videoDataArr.map((video) => {
        return (
          video.image !== featuredVideo.image && (
            <Link to={`/${video.id}`} className="videos__link" key={video.title}>
            <li
              className="videos__list"
              
              onClick={() =>
                changeVideo({
                  title: video.title,
                  channel: video.channel,
                  image: video.image,
                  duration: video.duration,
                  views: video.views,
                  likes: video.likes,
                  description: video.description,
                  commentData: video.comments,
                })
              }
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
          )
        );
      })}
    </section>
  );
};

export default VideosList;
