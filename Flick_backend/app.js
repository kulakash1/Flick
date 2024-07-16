const express = require('express');
const app = express();
const cors = require('cors')

const bodyParser = require('body-parser');
require("dotenv").config();

// const userRoute = require('./Routes/movie.js')
const movieRoute = require('./Routes/movie.js')
// const userRoute = require('./Routes/user.js')
const userCommentsRoute = require('./Routes/userComments.js')

app.use(bodyParser.json());


app.use(cors())

app.use(movieRoute);
// app.use(userRoute);
app.use(userCommentsRoute);

module.exports = app;