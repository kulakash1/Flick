const { fetchWebSeries } = require('../services/webSeries/webSeriesService'); // Import the movie service function

exports.webSeriesList = async (req, res) => {
    try {
      const movies = await fetchWebSeries(); // Fetch the movies
      res.json(movies); // Send the movies as JSON response
    } catch (err) {
      console.error("Error:", err); // Log the error for debugging
      res.status(500).json({ error: "An error occurred" }); // Send a 500 error response with a message
    }
  };
