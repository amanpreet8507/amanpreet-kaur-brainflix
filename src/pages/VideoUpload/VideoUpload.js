import './VideoUpload.scss';
import bicycleImg from '../../assets/Images/Upload-video-preview.jpg';
import PublishButton from '../../components/Buttons/PublishButton';

const VideoUpload = () => {

  return (
    <div className="upload-video">
      <p className="upload-video__h1">Upload Video</p>
      <form className="upload-video__form">
        <div className="upload-video__video-div">
            <p className="upload-video__p">VIDEO THUMBNAIL</p>
            <img className ="upload-video__img" src={bicycleImg} rel="bicycle"></img>
        </div>
        <div className="upload-video__title-and-descripiton">
            <div className="upload-video__title-div">
                <p className="upload-video__p">TITLE YOUR VIDEO</p>
                <input className="upload-video__title-input" type="text" placeholder="Add a title to your video"></input>
            </div>
            <div className="upload-video__description-div">
                <p className="upload-video__p">ADD A VIDEO DESCRIPTION</p>
                <textarea className="upload-video__description-textarea" placeholder="Add a description to your video"></textarea>
            </div>
        </div>
      </form>
      <PublishButton />
    </div>
  )
}

export default VideoUpload
