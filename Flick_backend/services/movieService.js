const fetchMovies = async () => {
    const fetch = await import('node-fetch').then(module => module.default);

    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=6&sort_by=popularity.desc';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjdlZjQ2YWU0ZjJhYWM2ZDYwNjk1OWM1ZDI3Nzk4NiIsIm5iZiI6MTcyMDYzNzg4NC43OTIyMTksInN1YiI6IjY2OGQ4NGQzYTcyMmFlOWM1ZmM1ZjdmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RdMVtjltgDn0fBxj9jhMh-dpYdJe3NRx3GhzvcWWKfA'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        // Map the results to include only the required fields
        const movies = data.results.map(movie => ({
            title: movie.title,
            original_language: movie.original_language,
            release_date: movie.release_date,
            overview: movie.overview,
            poster_path: `https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`,
            vote_average: movie.vote_average
        }));

        return { results: movies };
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

module.exports = { fetchMovies };
