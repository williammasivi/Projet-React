import Avatar from "./avatar"
import TweetForm from "./tweet-form";
import TweetEditorForm from "./tweet-editor-form"

function TweetEditor(){

    return(
     <div className="tweet-editor">
        <Avatar/>
        <TweetForm/>
        <TweetEditorForm/>
     </div>
    )
}
export default TweetEditor