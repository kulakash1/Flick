// const fetch = require('node-fetch');

const fetchUpcomingMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjdlZjQ2YWU0ZjJhYWM2ZDYwNjk1OWM1ZDI3Nzk4NiIsIm5iZiI6MTcyMTI0Mjg4Ni4zNjgxNDQsInN1YiI6IjY2OGQ4NGQzYTcyMmFlOWM1ZmM1ZjdmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qYiT0I8qdudWav4ruIeLw7VJmCRNM8HY4xoe65bR-Fo",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    // Map the results to include only the required fields
    const movies = data.results.map((movie) => ({
      title: movie.title,
      original_language: movie.original_language,
      release_date: movie.release_date,
      overview: movie.overview,
      poster_path: `https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`,
      vote_average: movie.vote_average,
    }));

    return { results: movies };
  } catch (error) {
    console.error("Error fetching Upcoming movies:", error);
    throw error;
  }
};

module.exports = { fetchUpcomingMovies };
