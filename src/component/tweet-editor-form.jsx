function TweetEditorForm(){
    return(
     <div className='tweet-editor-form'>
      <input className='tweet-editor-input' type='text' placeholder= "what's happening?"/>
  
      <div className='tweet-editor-buttons'>
  
        <div className='tweet-editor-actions'>
          <img src="src/assets/Top-Tweets.png" alt="" />
          <img src="src/assets/Top-Tweets-1.png" alt="" />
          <img src="src/assets/Top-Tweets-2.png" alt="" />
          <img src="src/assets/Top-Tweets-3.png" alt="" />
          <img src="src/assets/Top-Tweets-4.png" alt="" />
  
        </div>
        <div className='button'>Twitter</div>
      </div>
    </div>
    )
  }
  export default TweetEditorForm