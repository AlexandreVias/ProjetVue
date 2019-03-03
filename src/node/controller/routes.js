let bodyParser = require("body-parser");
const
    express = require('express'),
    app = express(),
    mongo = require('./mongo'),
    multer = require('multer');

let upload = multer({dest: '/tmp/'});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/listMovies', (req, res) =>
    mongo.listMovies().then(value => res.send(value))
);

app.patch('/movie', (req, res) =>
    mongo.updateMovie(req.body).then(value => res.send(value))
);

app.post('/movie', (req, res) =>
    mongo.createMovie(req.body).then(value => res.send(value))
);

app.delete('/movie/:id', (req, res) =>
    mongo.deleteMovie(req.params.id).then(value => res.send(value))
);

app.post('/movie/:id/image', upload.single('avatar'), (req, res) =>
    mongo.insertImage(req.params.id, req.file).then(value => res.send(value))
);

module.exports = app;