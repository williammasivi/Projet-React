import TweetTitleAuthor from "./tweet-title-author"
import TweetTitleDetails from "./tweet-title-details"
import image from "../assets/Verified.svg"

function TweetTitle(props){
   

    return(
        <div className="tweet-title">
         <TweetTitleAuthor TweetTitle={props.tweetTitle.tweetTitleAuthor}/>
         <img src={props.tweetTitle.image.Verified} alt="" />
         <TweetTitleDetails tweetDetail={props.tweetTitle.tweetTitleDetails1}/>
         <TweetTitleDetails tweetDetail={props.tweetTitle.tweetTitleDetails2}/>
         <TweetTitleDetails tweetDetail={props.tweetTitle.tweetTitleDetails3}/>
        </div>
    )
}
export default TweetTitle