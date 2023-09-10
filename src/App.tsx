import React from "react";
import "./App.css";
import MovieTileContainer from "./components/Movie/MovieTileContainer";
import Movie from "./models/Movie";
import CommentsContainer from "./components/Comments/CommentsContainer";
import CommentsContextProvider from "./store/comments-context";

const movies = [
  new Movie("Hollywood", "Dino Da", 2005, "It is a great movie!"),
  new Movie("Bollywood", "Dino Do", "2014", "It is an even better movie!"),
];

function App() {
  return (
    <CommentsContextProvider>
      <div className="header">Movie App</div>
      <div className="content">
        <MovieTileContainer movies={movies} />
        <CommentsContainer />
      </div>
    </CommentsContextProvider>
  );
}

export default App;
