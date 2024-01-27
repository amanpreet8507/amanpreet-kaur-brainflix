import { useEffect, useState } from "react";
import "./HomePage.scss";
import FeaturedVideo from "../../components/FeaturedVideo/FeaturedVideo";
import VideosList from "../../components/VideosList/VideosList";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import axios from "axios";

const HomePage = () => {
    const [currentVideo, setCurrentVideo] = useState([]);
    const [videosData, setVideosData] = useState([]);

    useEffect(()=>{
      const fetchData = async () => {
        const apiUrl = 'https://project-2-api.herokuapp.com/videos?api_key=0f205db7-e67d-4442-9a4e-f812451245a6'
        const response = await axios.get(apiUrl)
        const fetchedData = response.data
        console.log(fetchedData)
        setCurrentVideo(fetchedData[0]);
        setVideosData(fetchedData)
      }
      fetchData()
    },[])
    

    const alterVideo = (videoObject) => {
      setCurrentVideo(videoObject);
    };
  return (
    <div>

      <FeaturedVideo featuredVideo={currentVideo} />
      <div className="video-description__and__video-list">
        <VideoDescription featuredVideo={currentVideo} />
        <VideosList
          videoDataArr={videosData}
          featuredVideo={currentVideo}
          changeVideo={alterVideo}
        />
      </div>
    </div>
  )
}

export default HomePage
