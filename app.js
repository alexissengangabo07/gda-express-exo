import express from 'express';
import path from 'path';
import router from './routes/appRoutes.js';

//Initialzing server
const app = express();

//Enble ejs as templating engine
app.set('view engine', 'ejs');

//Middlewares
app.use('/views', express.static(path.resolve('/views/')));
app.use('/', router);

app.listen(5050, () => console.log("Server started"));