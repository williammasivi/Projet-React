
import TweetEditorButtons from "./tweet-editor-buttons"
import TweetEditorInput from "./tweet-editor-input"

function TweetEditorForm(){
    return(
      <div className='tweet-editor-form'>
         <TweetEditorInput />
         <TweetEditorButtons />
      </div>
    )
  }
  export default TweetEditorForm