if(process.env.NODE_ENV !== "production") {
  require('dotenv').config();
};


const express = require('express');
const app = express();
const cors = require('cors');

app.get('/', (req, res) => {
  res.send(process.env.TEST);
});

app.listen(8080, () => {
  console.log("Serving on port 8080");
});