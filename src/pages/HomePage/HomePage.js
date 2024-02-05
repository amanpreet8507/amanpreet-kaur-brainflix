import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HomePage.scss";
import FeaturedVideo from "../../components/FeaturedVideo/FeaturedVideo";
import VideosList from "../../components/VideosList/VideosList";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import axios from "axios";

const HomePage = () => {

    const [currentVideo, setCurrentVideo] = useState({});
    const [videosData, setVideosData] = useState([]);
    const {videoId} = useParams()
    console.log("videoIDvideoId", videoId)

{/****************** Fuction to fetch Videos Array ********************/}
    const fetchVideosList = async () => {
      const apiKey = `0f205db7-e67d-4442-9a4e-f812451245a6`
      const apiUrl = `http://localhost:2007/videos/`

      const response = await axios.get(apiUrl)
      const fetchedData = response.data

      setVideosData(fetchedData)
    }

{/*********** Fuction to fetch each Video details using id ************/}
    const fetchVideoDetails = async (id) => {
      const apiKey = `0f205db7-e67d-4442-9a4e-f812451245a6`
      const apiUrl = `http://localhost:2007/videos/${id}`
      
      const response = await axios.get(apiUrl)
      const fetchedData = response.data

      setCurrentVideo(fetchedData);
    }

{/**************** Updating the useState variables ********************/}
    useEffect(()=>{
      if(videoId){
        fetchVideoDetails(videoId);
        fetchVideosList();
      }else{
        fetchVideoDetails('c05b9a93-8682-4ab6-aff2-92ebb4bbfc14');
        fetchVideosList();
      }
    }, [videoId])

  return (
    currentVideo.image !== videosData.image && (
    <div>
      <FeaturedVideo currentVideo={currentVideo} />
      <div className="video-description__and__video-list">
        <VideoDescription currentVideo={currentVideo} />
        <VideosList
          videosData={videosData}
          currentVideo={currentVideo}
        />
      </div>
    </div>
  )
  )
}

export default HomePage
