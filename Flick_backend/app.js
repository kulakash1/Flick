const express = require('express');
const app = express();
const cors = require('cors')

const bodyParser = require('body-parser');
require("dotenv").config();

// const userRoute = require('./Routes/movie.js')
const authRoutes = require('./Routes/auth.js'); // Adjust the path as needed
const movieRoute = require('./Routes/movie.js')
const userRoute = require('./Routes/user.js')
const userCommentsRoute = require('./Routes/userComments.js')
const userArticlesRoute = require('./Routes/userArticles.js')
const webSeriesRoute = require('./Routes/webSeries.js')

app.use(bodyParser.json());


app.use(cors())

app.use(authRoutes);
app.use(movieRoute);
app.use(userRoute);
app.use(userCommentsRoute);
app.use(userArticlesRoute);
app.use(webSeriesRoute);

module.exports = app;