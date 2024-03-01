import TweetImage from "./tweet-image"
import TweetText from "./tweet-text"
import TweetTitle from "./tweet-title"

function TweetBody(props){
  // console.log(props)
    return(
        <div className="tweet-body">
          <TweetTitle tweetTitle={props.tweetBody.tweetTitle}/>
          <TweetText tweetText={props.tweetBody.tweetText}/>
          <TweetImage tweetImage={props.tweetBody.tweetImage}/>
        </div>
    )
}
export default TweetBody