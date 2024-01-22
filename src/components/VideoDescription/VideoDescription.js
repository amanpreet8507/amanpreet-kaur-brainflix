import './VideoDescription.scss';
import AvatarImg from '../../assets/Images/Mohan-muruge.jpg';
import CommentButton from '../Buttons/CommentButton';
import viewsIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';

const VideoDescription = ({ featuredVideo }) => {
    const { title, channel, description, likes, views, commentData} = featuredVideo
    {/*ConverTimestamp to Date */}
    const convertTimeStampToDate = (timestamp) => {
        const date = new Date(timestamp)
      
        const day = date.getDate()+1
        const month = date.getMonth()+1
        const year = date.getFullYear()
      
        const finalDate  = `${day}/${month}/${year}`
      
        return finalDate
      }
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
      <section> 
      {/************************** Comments Section ********************/}
        {commentData && commentData.map((comment, index)=> (
            <div key={index} className="comments__container">                
                <img className="comments__container__avatar-img" src="#"></img>
                <div className="comments__container-comment-details">
                    <div className="comments__container-name-date">
                        <p className="comments__container-name">{comment.name}</p>
                        <p className="comments__container-date">{convertTimeStampToDate(comment.timestamp)}</p>
                    </div>
                    <div className="comments__container__comment">
                        <p>{comment.comment}</p>
                    </div>
                </div>
            </div>
        ))}
      
      </section>
    </div>
    </section>
  )
}
export default VideoDescription
