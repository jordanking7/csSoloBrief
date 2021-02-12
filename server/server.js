const express = require('express');
const path = require('path');
const db = require('../model.js')
const app = express();
const controllerMeth = require('../controller.js')
//app use get
app.use(express.json())
// app.use(express.urlencoded({ extended: true }));
//static bs
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', controllerMeth.getPartners,
  (req, res) => {
    // return res.status(200).sendFile(path.join(__dirname, '../client/index.js'));
    console.log('get body')
    console.log(res.locals.people)
    // return res.status(200).sendFile('../index.html');
    return res.status(200).json(res.locals.people).sendFile(path.join(__dirname, '../index.html'));
    // .sendFile(path.join(__dirname, '../client/index.js'))
});
//create server

//app listen
app.listen(3000, ()=>{
  console.log('Server listening on port 3000')
});
