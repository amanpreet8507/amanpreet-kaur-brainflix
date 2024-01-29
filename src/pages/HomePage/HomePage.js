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

    const fetchVideosList = async () => {
      const apiKey = `0f205db7-e67d-4442-9a4e-f812451245a6`
      const apiUrl = `https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`
      const response = await axios.get(apiUrl)
      const fetchedData = response.data
      //setCurrentVideo(fetchedData[0]);
      setVideosData(fetchedData)
    }

    const fetchVideoDetails = async (id) => {
      const apiKey = `0f205db7-e67d-4442-9a4e-f812451245a6`
      const apiUrl = `https://project-2-api.herokuapp.com/videos/${id}?api_key=${apiKey}`
      const response = await axios.get(apiUrl)
      const fetchedData = response.data

      setCurrentVideo(fetchedData);
      console.log("fetched data in video des", fetchedData)
    }

    useEffect(()=>{
      if(videoId){
        fetchVideoDetails(videoId);
        fetchVideosList();
      }else{
        fetchVideoDetails('c05b9a93-8682-4ab6-aff2-92ebb4bbfc14');
        fetchVideosList();
      }
    },[videoId])

    

    // const alterVideo = (videoObject) => {
    //   setCurrentVideo(videoObject);
    // };

  return (
    currentVideo.image !== videosData.image && (
    <div>
      <FeaturedVideo currentVideo={currentVideo} />
      <div className="video-description__and__video-list">
        <VideoDescription currentVideo={currentVideo} />
        <VideosList
          videosData={videosData}
          currentVideo={currentVideo}
          // changeVideo={alterVideo}
        />
      </div>
    </div>
  )
  )
}

export default HomePage
