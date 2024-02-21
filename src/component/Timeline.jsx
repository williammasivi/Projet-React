
import TweetEditorForm from "./tweet-editor-form";
import Tweets from "./tweets";
function Timeline(){
  
    return(
      <div className='timeline'>
        <div className='header'>
        <h1>Home</h1>
        <img className='top-tweets' src="src/assets/Timeline-Prop.png" alt="top-tweets" />
        </div>
        <div className='tweet-editor'>
        <div className='avatar'>
           <img className='avatar' src="src/assets/IMG-20240214-WA0019(1).jpg" alt="avatar" />
        </div>
      <TweetEditorForm />
      </div>
      <Tweets/>
  
      </div>
    )
  }
  export default Timeline