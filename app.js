import express from 'express';
import path from 'path';
import router from './routes/appRoutes.js';

//Initialzing server
const app = express();
const PORT = 5050 || process.env.PORT;

//Enable ejs as templating engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//Middlewares
// app.use('/views', express.static(path.resolve('/views/')));
app.use('/', router);

app.listen(PORT, () => console.log("Server started"));