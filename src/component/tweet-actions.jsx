import TweetAction from "./tweet-action"
import logo1 from "../assets/Reply.svg" 
import logo2 from "../assets/Retweet.svg"
import logo3 from "../assets/React.svg" 
import logo4 from "../assets/Share.svg" 
function TweetActions(props){
    // console.log(props)
    return(
        <div className="tweet-actions">
         <TweetAction actions={props.tweetActions.tweetAction1.image} nombre={props.tweetActions.tweetAction1.nombre}/>
         <TweetAction actions={props.tweetActions.tweetAction2.image} nombre={props.tweetActions.tweetAction2.nombre}/>
         <TweetAction actions={props.tweetActions.tweetAction3.image} nombre={props.tweetActions.tweetAction3.nombre}/>
         <TweetAction actions={props.tweetActions.tweetAction4.image} nombre={props.tweetActions.tweetAction4.nombre}/>
        </div>
    )
}
export default TweetActions