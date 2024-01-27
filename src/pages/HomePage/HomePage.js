import { useState } from "react";
import "./HomePage.scss";
import videoData from "../../data/video-details.json";
import FeaturedVideo from "../../components/FeaturedVideo/FeaturedVideo";
import VideosList from "../../components/VideosList/VideosList";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import axios from "axios";

const HomePage = () => {
    const fetchData = async () => {
      const apiUrl = ''
      const videoData = await axios.get(apiUrl)
    }
    const [currentVideo, setCurrentVideo] = useState(videoData[0]);

    const alterVideo = (videoObject) => {
      setCurrentVideo(videoObject);
    };
  return (
    <div>

      <FeaturedVideo featuredVideo={currentVideo} />
      <div className="video-description__and__video-list">
        <VideoDescription featuredVideo={currentVideo} />
        <VideosList
          videoDataArr={videoData}
          featuredVideo={currentVideo}
          changeVideo={alterVideo}
        />
      </div>
    </div>
  )
}

export default HomePage
