import fs from 'fs';
import path from 'path';

import express from 'express';
import bodyParser from  'body-parser';
import morgan from 'morgan';//logging every operation on our server
import dotenv from 'dotenv'; //loads our config env file content into NODEJS process

import tourRoutes from './routes/tourRoutes'

dotenv.config({path: './config.env'}) //saves our config data into nodejs env

const app = express();
const port = 8000;
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});


app.use(morgan('combined', {stream: accessLogStream}))
app.use(bodyParser.json());
app.use(tourRoutes);

app.listen(process.env.PORT || port)

