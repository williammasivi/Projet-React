import tweetimage from "../assets/Principal-pic3.png"
function TweetImage(props){
    return(
        <div className="tweet-image">
         <img src={props.tweetImage.imageprincipale} alt="" />
        </div>
    )
}
export default TweetImage