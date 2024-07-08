const express = require('express');
const cors = require('cors');
const http = require('https');
const app = express();
const port = 3001;

app.use(cors());

app.get('/api/movies/upcoming', (req, res) => {
    const options = {
        method: 'GET',
        hostname: 'moviesdatabase.p.rapidapi.com',
        port: null,
        path: '/titles/x/upcoming',
        headers: {
            'x-rapidapi-key': '097bd0fca4msh1465691a0aa8465p11ee8cjsn1fc88d00929a',
            'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    const request = http.request(options, function (response) {
        const chunks = [];

        response.on('data', function (chunk) {
            chunks.push(chunk);
        });

        response.on('end', function () {
            const body = Buffer.concat(chunks);
            res.json(JSON.parse(body.toString()));
        });
    });

    request.end();
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
