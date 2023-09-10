import React, { FC } from "react";
import Movie from "../../models/Movie";
import MovieTile from "./MovieTile";
import classes from "./MovieTileContainer.module.css";

const MovieTileContainer: FC<{ movies: Movie[] }> = (props) => {
  return (
    <div className={classes.container}>
      {props.movies.map((movie) => {
        return <MovieTile key={movie.title} title={movie.title} />;
      })}
    </div>
  );
};

export default MovieTileContainer;
