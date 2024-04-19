const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(url);


client.connect(err => {
    if(err){
        console.log("Error");
    }
    else{
        console.log("Connected");
    }
});

const db = client.db("REST");

module.exports = db;