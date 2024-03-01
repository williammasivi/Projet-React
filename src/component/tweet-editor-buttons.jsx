import Button from "./button"
import TweetEditorAction from "./tweet-editor-action"

function TweetEditorButtons(){
    return(
        <div className="tweet-editor-buttons">
           <TweetEditorAction/>
           <Button/>
        </div>
    )
}
export default TweetEditorButtons