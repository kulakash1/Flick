const express = require('express');
const cors = require('cors');
const { fetchMovies } = require('./services/movieService'); // Import the movie service function
const app = express();
const port = 3001;

app.use(cors());

app.get('/api/movies/list', async (req, res) => {
    try {
        const movies = await fetchMovies();
        res.json(movies);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
