import express from 'express';
import { apiController } from './controller/api';
import { spaController } from './controller/spa';
import compression from 'compression';

const PORT = process.env.PORT || 3000;
const app = express();

var maxTime = 43200000;
app.use(compression())
app.use(express.static('dist'), { maxAge: maxTime, immutable: true });
app.use(apiController);
app.use(spaController);

app.listen(PORT);
