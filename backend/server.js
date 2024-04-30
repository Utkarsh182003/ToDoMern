require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');


const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/todoRoute')

const PORT = process.env.PORT || 5000

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to db & listening on port...")
    })
    .catch((error) => {
      console.log("error occured", error);
    });

app.use(routes);

app.listen(PORT, () =>
    console.log(`Listening on: ${PORT}`)
)