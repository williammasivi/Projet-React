import Tweetavatar from "../assets/NewYorkTimes-pic.png"
function TweetAvatar (props){
    // console.log()
    return(
        <div className='tweet-avatar'>
           <img src={props.tweetAvatar} alt="" />
        </div>
    )
}
export default TweetAvatar
