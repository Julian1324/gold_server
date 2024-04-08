import express from 'express';
import cors from 'cors';
const app = express();
const port = 3001;
import { router } from './routes/routes';
import db from './database/mongo'

const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3002'],
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(router);

db().then( ()=> console.log('Conexion ready') );

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});