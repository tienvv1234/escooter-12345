import config from './config/env';
import app from './config/express';

//connect to postgred
const pg = require('pg');
const connectionString = process.env.db || 'postgresql://postgres:tien1991@localhost/testdatabase';
const results = [];
//const client = new pg.Client(connectionString);
pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if (err) {
        done();
        console.log(err);
        //return res.status(500).json({ success: false, data: err });
    }

    console.log("Connected")
    // // SQL Query > Select Data
    // const query = client.query('SELECT * FROM public."user"');
    // // Stream results back one row at a time
    // query.on('row', (row) => {
    //     results.push(row);
    // });
    // // After all data is returned, close connection and return results
    // query.on('end', () => {
    //     console.log("end")
    //     console.log("results", results)
    //     done();
    //     //return res.status(200).json({ success: true });
    // });
});

const debug = require('debug')('escooter-backend-web:index');
// listen on port config.port
app.listen(process.env.PORT || config.port, () => {
    console.log("config.port", config.port);
    debug(`server started on port ${config.port} (${config.env})`);
});

export default app;


