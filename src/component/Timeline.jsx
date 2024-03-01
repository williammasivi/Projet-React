
import Header from "./header";
import TweetEditor from "./tweet-editor";
import Tweets from "./tweets";

function Timeline(){
  
    return(
      <div className='timeline'>
        <Header/>
        <TweetEditor/>
        <Tweets/>
      </div>
    )
  }
  export default Timeline