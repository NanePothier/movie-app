import React, { FC, PropsWithChildren, useState } from "react";
import Comment from "../models/Comment";

type ContextObj = {
  comments: Comment[];
  addComment: (text: string) => void;
  removeComment: (id: string) => void;
};

export const CommentsContext = React.createContext<ContextObj>({
  comments: [],
  addComment: () => {},
  removeComment: (id: string) => {},
});

const CommentsContextProvider: FC<PropsWithChildren> = (props) => {
  const [comments, setComments] = useState<Comment[]>([
    new Comment("Mary", "Great movie!"),
  ]);

  const addCommentHandler = (text: string) => {
    const newComment = new Comment("Mary", text);

    setComments((prevComments) => {
      return prevComments.concat(newComment);
    });
  };

  const removeCommentHandler = (id: string) => {
    setComments((prevComments) => {
      return prevComments.filter((comment) => comment.id !== id);
    });
  };

  const contextValue: ContextObj = {
    comments: comments,
    addComment: addCommentHandler,
    removeComment: removeCommentHandler,
  };

  return (
    <CommentsContext.Provider value={contextValue}>
      {props.children}
    </CommentsContext.Provider>
  );
};

export default CommentsContextProvider;
