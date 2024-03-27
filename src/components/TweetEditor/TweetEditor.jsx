import React from "react";
import Avatar from "./components/Avatar";
import { ProfilePhoto } from "../../data/ImagesIcons";
import TweetEditorForm from "./TweetEditorForm";

const TweetEditor = () => {
  return (
    <div className="tweet-editor">
      <Avatar imgURL={ProfilePhoto} />
      <TweetEditorForm />
    </div>
  );
};

export default TweetEditor;
