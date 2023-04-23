const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended : true  
}));
app.use(cors());

Port = process.env.PORT;
Url = process.env.URL;

mongoose.connect(Url, { useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to MongoDB');
    // Your code here
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

app.listen(Port, () => {
    console.log("Port No : " + Port);
});


const Card = require('./routes/cardroute.js');
app.use('/card', Card);