import React, { FC } from "react";
import classes from "./MovieTile.module.css";

const MovieTile: FC<{ title: string }> = (props) => {
  return <div className={classes.tile}>{props.title}</div>;
};

export default MovieTile;
