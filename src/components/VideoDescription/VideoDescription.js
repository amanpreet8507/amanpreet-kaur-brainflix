import './VideoDescription.scss';
import AvatarImg from '../../assets/Images/Mohan-muruge.jpg';
import CommentButton from '../Buttons/CommentButton';
import viewsIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';

const VideoDescription = ({ featuredVideo }) => {
    const { title, channel, description, likes, views, commentData} = featuredVideo
    console.log(commentData)
  return (
    <section className="video">
    {/******************** Featured Video Information Container *******************/}
    <div className="video__info-container">
      <h1 className="video__title">{title}</h1>
      <section className="video__numbers">
        <div className="video__numbers-div">
          <p className="video__channel">By {channel} </p>
          <p className="video__number">07/11/2021</p>
        </div>
        <div className="video__numbers-div video__views-likes">
          <p className="video__number">         
            <img src ={viewsIcon}></img> {views}
          </p>
          <p className="video__number">
            <img src={likesIcon}></img> {likes}
          </p>
        </div>
      </section>
      <section className="video__description-container">
        <p className='video__description'>{description}</p>
      </section>
    </div>
    {/*******************  Comment Form *************************/}
    <div className="video__comments-div">
      <p className="video__no-of-comments"> {commentData?.length || 0} Comments</p>
      <section className="video__form-section">
        <img className="video__avatar-img" src={AvatarImg}></img>
        <form className="video__comment-form">
          <div>
            <p className="video__p">JOIN THE CONVERSATION</p>
            <textarea
            className="video__textarea"
              name="comment"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <CommentButton />
        </form>
      </section>
    </div>
    </section>
  )
}
export default VideoDescription
