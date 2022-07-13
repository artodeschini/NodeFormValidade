const express = require('express');
const bodyParser = require('body-parser');
const session = require("express-session");
const flash = require("express-flash");
const port = 8080;
let app = express();

app.set('view engine', 'ejs');

// body-parse
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({ 
    secret: 'anything',
    resave: true,
    saveUninitialized: true,
    maxAge: 3600000 //tempo de duracao da session tempo em milisegundos
 }));

app.use(flash());

// main router

app.get("/", (req, res) => {
    console.log("funcionando");
    res.send('work');
});


app.listen(port, (req, res) => {
    console.log('service is started')
})