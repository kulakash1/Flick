const fetchWebSeries = async () => {
  const url =
    "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjdlZjQ2YWU0ZjJhYWM2ZDYwNjk1OWM1ZDI3Nzk4NiIsIm5iZiI6MTcyMTQxNTYzNi43MDM3MTMsInN1YiI6IjY2OGQ4NGQzYTcyMmFlOWM1ZmM1ZjdmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LvM-T0ze3JhIxC9rJxGQ5XtkRloNpa4tqajF39oP05k",
    },
  };

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
    console.error("Error fetching movies:", error);
    throw error;
  }
};

module.exports = { fetchWebSeries };
