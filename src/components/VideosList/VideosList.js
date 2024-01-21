import './VideosList.scss';
const VideosList = ({videoDataArr, featuredVideo, changeVideo}) => {
  return (
    <section className="videos">
      <p className="videos__heading">NEXT VIDOES</p>
      {videoDataArr.map((video)=>{
        return(
          video.image!==featuredVideo.image &&
           <li className="videos__list"
            key={video.title}
            onClick={() => changeVideo({
              title: video.title,
              channel: video.channel,
              image: video.image
            })}>
              <img className="videos__image" src={video.image}></img>
              <div className="videos__title-and-channel">
                <p className="videos__title">{video.title}</p>
                <p className="videos__channel">{video.channel}</p>
              </div>
          </li>
        )
      })}

    </section>
  )
}

export default VideosList
