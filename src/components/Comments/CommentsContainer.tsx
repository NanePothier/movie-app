import React, { FC, useContext } from "react";
import FormInput from "../UI/FormInput";
import CommentTile from "./CommentTile";
import classes from "./CommentsContainer.module.css";
import { CommentsContext } from "../../store/comments-context";

const CommentsContainer: FC = () => {
  const commentsCtx = useContext(CommentsContext);

  const commentElements = commentsCtx.comments.map((comment) => {
    return (
      <CommentTile
        key={comment.id}
        text={comment.text}
        onRemoveComment={commentsCtx.removeComment.bind(null, comment.id)}
      />
    );
  });

  return (
    <div className={classes.container}>
      <div>
        <FormInput
          label="Enter your comment:"
          btnText="Submit"
          onSubmit={commentsCtx.addComment}
        />
      </div>
      <div>{commentElements}</div>
    </div>
  );
};

export default CommentsContainer;
