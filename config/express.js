import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../server/routers';
import helmet from 'helmet';
import compress from 'compression';
import APIError from '../server/helpers/APIError';
import httpStatus from 'http-status';
// const server = require('http').createServer(app);
const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// //Helps in decreasing the size of the response body and improve the speed of the API calls.
app.use(compress());
app.use(helmet());
// // enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount all routes on /api path
app.use('/api', routes);



// catch 404 and forward to error handler
app.use((req, res, next) => {
    console.log("catch 404 and forward to error handler")
    const err = new APIError('API not found', httpStatus.NOT_FOUND);
    return next(err);
});


export default app;