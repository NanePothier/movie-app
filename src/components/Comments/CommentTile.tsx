import React, { FC } from "react";
import classes from "./CommentTile.module.css";

const CommentTile: FC<{ text: string; onRemoveComment: () => void }> = (
  props
) => {
  return (
    <div className={classes.tile} onClick={props.onRemoveComment}>
      {props.text}
    </div>
  );
};

export default CommentTile;
