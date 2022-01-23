const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.get('/', (req, res, next) => {
    res.send("Hello Ahmedou")
})

const port = process.env.PORT | 5000;

app.listen(port, (err) => {
    if(err)
        console.log(err);

    console.log("the server is running on port: " + port)
})