// app.get('/api/movies/list', async (req, res) => {
//     try {
//         const movies = await fetchMovies();
//         res.json(movies);
//     } catch (err) {
//         console.error('Error:', err);
//         res.status(500).json({ error: 'An error occurred' });
//     }
// });



const http = require('http');
const app = require('./app.js');

// const port = 7000;

const server = http.createServer(app);
// server.listen(port);

module.exports = server;