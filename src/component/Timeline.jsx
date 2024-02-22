
import TweetEditorForm from "./tweet-editor-form";
import Tweets from "./tweets";
import TimelineProp from '../assets/Timeline-Prop.png'
import Avatar from '../assets/IMG-20240214-WA0019(1).jpg'
function Timeline(){
  
    return(
      <div className='timeline'>
        <div className='header'>
        <h1>Home</h1>
        <img className='top-tweets' src={TimelineProp} alt="top-tweets" />
        </div>
        <div className='tweet-editor'>
        <div className='avatar'>
           <img className='avatar' src={Avatar} alt="top-tweets" />
        </div>
      <TweetEditorForm />
      </div>
      <Tweets/>
  
      </div>
    )
  }
  export default Timeline