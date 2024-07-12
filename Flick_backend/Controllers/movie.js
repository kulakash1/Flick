const { fetchMovies } = require('../services/movieService'); // Import the movie service function

exports.movieList = async (req, res) => {
    try {
      const movies = await fetchMovies(); // Fetch the movies
      res.json(movies); // Send the movies as JSON response
    } catch (err) {
      console.error("Error:", err); // Log the error for debugging
      res.status(500).json({ error: "An error occurred" }); // Send a 500 error response with a message
    }
  };