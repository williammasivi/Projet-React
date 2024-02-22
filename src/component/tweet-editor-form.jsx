import Toptweets from '../assets/Top-Tweets.png'
import Toptweets1 from '../assets/Top-Tweets-1.png'
import Toptweets2 from '../assets/Top-Tweets-2.png'
import Toptweets3 from '../assets/Top-Tweets-3.png'
import Toptweets4 from '../assets/Top-Tweets-4.png'
function TweetEditorForm(){
    return(
     <div className='tweet-editor-form'>
      <input className='tweet-editor-input' type='text' placeholder= "what's happening?"/>
  
      <div className='tweet-editor-buttons'>
  
        <div className='tweet-editor-actions'>
         <img className='top-tweets' src={Toptweets} alt="top-tweets" />
         <img className='top-tweets 1' src={Toptweets1} alt="top-tweets" />
         <img className='top-tweets 2' src={Toptweets2} alt="top-tweets" />
         <img className='top-tweets 3' src={Toptweets3} alt="top-tweets" />
         <img className='top-tweets 4' src={Toptweets4} alt="top-tweets" />
  
        </div>
        <div className='button'>Twitter</div>
      </div>
    </div>
    )
  }
  export default TweetEditorForm