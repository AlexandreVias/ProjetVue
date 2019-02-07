app.get('/', function (req, res) {
    res.send('GET request to the homepage');
});

let MongoClient = require("mongodb").MongoClient;
const
    url = "mongodb://localhost:27017",
    dbName = "ProjetVueDB",
    client = new MongoClient(url);

client.connect(err => {
    if (err) throw err;
    console.log("gg");
    const db = client.db(dbName);
    findDocuments(db);
    client.close();
});

const findDocuments = function(db, callback) {
    const collection = db.collection("movies");
    collection.find({}).toArray(function(err, docs) {
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
};

//http://mongodb.github.io/node-mongodb-native/3.1/quick-start/quick-start/
//https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp