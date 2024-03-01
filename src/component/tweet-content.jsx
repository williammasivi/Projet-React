import TweetActions from "./tweet-actions"
import TweetBody from "./tweet-body"

function TweetContent (props){
    
    return(
        <div className='tweet-content'>
            <TweetBody tweetBody={props.tweetContent.tweetBody}/>
            <TweetActions tweetActions={props.tweetContent.tweetAction}/>
        </div>
    )
}
export default TweetContent