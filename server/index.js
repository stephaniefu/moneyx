const express = require ('express');
const parser = require('body-parser');
const morgan = require('morgan');

const PORT = 8080;

const app = express();

app.use(parser.urlencoded({extended:true}));
app.use(parser.json());
app.use(morgan('dev'));

app.listen(PORT, err => {
  if (err) {
    console.log(`Could not connect to PORT ${PORT}`)
  } else {
    console.log(`Successfully connected to PORT ${PORT}`)
  }
});