const express = require('express');
const cors = require('cors');
const https = require('https');
const app = express();
const port = 3001;

app.use(cors());

app.get('/api/movies/popular', (req, res) => {
    const options = {
        method: 'POST',
        hostname: 'imdb188.p.rapidapi.com',
        port: null,
        path: '/api/v1/getPopularMovies',
        headers: {
            'x-rapidapi-key': '097bd0fca4msh1465691a0aa8465p11ee8cjsn1fc88d00929a',
            'x-rapidapi-host': 'imdb188.p.rapidapi.com',
            'Content-Type': 'application/json'
        }
    };

    const request = https.request(options, function (response) {
        const chunks = [];

        response.on('data', function (chunk) {
            chunks.push(chunk);
        });

        response.on('end', function () {
            const body = Buffer.concat(chunks);
            res.json(JSON.parse(body.toString()));
        });
    });

    const requestBody = JSON.stringify({
        country: {
            anyPrimaryCountries: ['IN']
        },
        limit: 200,
        releaseDate: {
            releaseDateRange: {
                end: '2029-12-31',
                start: '2020-01-01'
            }
        },
        userRatings: {
            aggregateRatingRange: { max: 10, min: 6 },
            ratingsCountRange: { min: 1000 }
        },
        genre: {
            allGenreIds: ['Action']
        },
        runtime: {
            runtimeRangeMinutes: { max: 120, min: 0 }
        }
    });

    request.write(requestBody);
    request.end();
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
