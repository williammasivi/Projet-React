
import TweetAvatar from "./tweet-avatar"
import TweetContent from "./tweet-content"
import Tweets from "./tweets"

function Tweet (props){
  // console.log(props);
    return(
        <div className='tweet'>
          <TweetAvatar tweetAvatar={props.param.tweetAvatar}/>
          <TweetContent tweetContent={props.param.tweetContent}/>
        </div>
    )
}
export default Tweet
