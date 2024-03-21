import express from 'express';
import cors from 'cors'
const app = express();
const port = 3001;
import { router } from './src/routes/routes.js';
import db from './src/database/mongo.js'

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(router);

db().then( console.log('Conexion ready') );

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});