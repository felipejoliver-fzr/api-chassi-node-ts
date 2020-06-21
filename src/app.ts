import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import routesV1 from './routes/v1';

const app = express();

app.use(cors())
app.use(express.json())
app.use('/v1', routesV1)
app.use(errors());


export default app;