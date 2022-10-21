import express from 'express';
import path from 'path';

//Initialzing server
const app = express();

//Enble ejs as templating engine
app.set('view engine', 'ejs');

//Routes
app.get('/', (req, res) => res.sendFile( path.resolve('./views/index.ejs') ));

app.get('/contact', (req, res) => res.sendFile( path.resolve('./views/contact.ejs')));

app.get('/about', (req, res) => res.sendFile( path.resolve('./views/about.ejs')));

app.listen(5050, () => console.log("Server started"));