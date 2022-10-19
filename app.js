import express from 'express';
import path from 'path';

//Initialzing server
const app = express();

//Routes
app.get('/', (req, res) => res.sendFile( path.resolve('./views/index.html') ));

app.get('/contact', (req, res) => res.sendFile( path.resolve('./views/contact.html')));

app.get('/about', (req, res) => res.sendFile( path.resolve('./views/about.html')));

app.listen(5050, () => console.log("Server started"));