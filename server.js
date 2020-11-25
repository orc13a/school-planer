const express = require('express');


const server = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

server.get('/', (req, res) => {
    res.status(200).json({ messages: "Hello World" });
    res.end();
});

server.listen(port, (err) => {
    if(err) throw err;
    console.log(`\n > Listening on port: ${port}\n`);
});
