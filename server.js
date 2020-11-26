const express = require('express');


const server = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

server.set("view engine", "ejs");
server.set("views", __dirname + "/views");
server.set("view options", { layout: false } );
server.use(express.static(__dirname + '/public'));

// server.get('*', (req, res) => {
//     res.status(404).json({ error: "404 not found" });
//     // res.render('pages/index');
//     res.end();
// });

server.get('/', (req, res) => {
    res.render('pages/index', { active: 'home' });
    res.end();
});

server.get('/add', (req, res) => {
    res.render('pages/add', { active: 'add' });
    res.end();
});

server.listen(port, (err) => {
    if(err) throw err;
    console.log(`\n > Listening on port: ${port}\n`);
});
