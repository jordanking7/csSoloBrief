const express = require('express');
const path = require('path');


const app = express();

//static bs
app.use('/build', express.static(path.join(__dirname, '../build')));
//app use get
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
//create server

//app listen
app.listen(3000);