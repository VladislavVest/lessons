const log = console.log;
const { MongoClient } = require('mongodb');
const URL = 'mongodb://localhost:27017/firstbase';
let dbConnection;


module.exports = {
    connectToDb: (cb) => {
        MongoClient
            .connect(URL)
            .then((client) => {
            log('Connected to DB');
            dbConnection = client.db();
            return cb();
        })

 

          .catch((err) => {
            return cb(err);
        })

},
getDb: () => dbConnection,
}