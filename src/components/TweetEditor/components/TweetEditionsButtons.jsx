import React from "react";
import TweetEditorActions from './TweetEditorActions';
import Button from "../../buttons/Button";

const TweetEditorButtons = () => {
   return (
      <div className="tweet-editor-buttons">
         <TweetEditorActions />
         <Button 
            primary="primary"
            title={"Tweet"} 
         />
      </div>
   );
};

export default TweetEditorButtons;