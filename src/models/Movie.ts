class Movie {
  title: string;
  director: string;
  year: number | string;
  summary: string;

  constructor(
    title: string,
    director: string,
    year: number | string,
    summary: string
  ) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.summary = summary;
  }
}

export default Movie;
