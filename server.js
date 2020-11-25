const express = require('express');


const server = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

server.set("view engine", "ejs");
server.set("views", __dirname + "/views");
server.set("view options", { layout: false } );

server.get('/', (req, res) => {
    res.status(200).json({ messages: "Hello World" });
    res.end();
});

server.get('/ejs', (req, res) => {
    res.render('index');
});

server.listen(port, (err) => {
    if(err) throw err;
    console.log(`\n > Listening on port: ${port}\n`);
});
