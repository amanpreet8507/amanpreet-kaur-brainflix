import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import videoData from "./data/video-details.json";
import FeaturedVideo from "./components/FeaturedVideo/FeaturedVideo";
import VideosList from "./components/VideosList/VideosList";
import VideoDescription from "./components/VideoDescription/VideoDescription";

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoData);

  const alterVideo = (videoObject) => {
    setCurrentVideo(videoObject);
  };

  return (
    <div>
      <Navbar />
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
  );
}

export default App;
