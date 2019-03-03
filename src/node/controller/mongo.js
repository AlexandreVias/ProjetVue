const
    ObjectId = require("mongodb").ObjectId,
    client = new (require("mongodb").MongoClient)("mongodb://localhost:27017", {useNewUrlParser: true}),
    fs = require('fs');

exports.listMovies = () => {
    return new Promise(resolve => {
        client.connect(() =>
            resolve(client.db("ProjetVueDB").collection("movies").find({}).toArray()))
    });
};

exports.updateMovie = movie => {
    return new Promise(resolve => {
        client.connect(() => {
            const id = movie._id;
            delete movie._id;
            client.db("ProjetVueDB").collection("movies").updateOne(
                {_id: ObjectId(id)},
                {$set: movie},
                {upsert: true},
                (err, res) => {
                    if (err) {
                        resolve(err);
                        return
                    }
                    resolve(res);
                }
            )
        })
    })
};

exports.createMovie = movie => {
    return new Promise(resolve => {
        client.connect(() => {
            client.db("ProjetVueDB").collection("movies").insertOne(movie, (err, res) => {
                if (err) {
                    resolve(err);
                    return
                }
                resolve(res);
            });
        })
    })
};

exports.deleteMovie = id => {
    return new Promise(resolve => {
        client.connect(() => {
            client.db("ProjetVueDB").collection("movies").deleteOne({_id: ObjectId(id)}, (err, res) => {
                if (err) {
                    resolve(err);
                    return
                }
                resolve(res);
            });
        })
    })
};

exports.insertImage = (id, file) => {
    return new Promise((resolve, reject) => {
        fs.rename(
            file.path,
            __dirname + '/../../static/' + id + '.jpg',
            err => {
                if (err) reject("rename" + err);
                else resolve();
            }
        )
    })
};

exports.getImage = id => {
    return new Promise( ((resolve, reject) => {

    }))
};