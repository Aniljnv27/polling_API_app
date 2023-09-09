const Port = 4000; // Define the port number

const express = require('express');
const app = express();
app.use(express.json());

const db = require('./config/mongoose');

// Routes
app.use('/', require('./routes/index'));

app.listen(Port, function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Server is running on port", Port);
});