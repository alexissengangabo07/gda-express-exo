import express from 'express';
import path from 'path';

//Initialzing server
const app = express();

//Enble ejs as templating engine
app.set('view engine', 'ejs');

//Routes
app.get('/', (req, res) => res.render( path.resolve('./views/index') ));

app.get('/contact', (req, res) => res.render( path.resolve('./views/contact')));

app.get('/about', (req, res) => res.render( path.resolve('./views/about')));

app.listen(5050, () => console.log("Server started"));