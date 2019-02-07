const express = require('express'),
    app = express();

//app.use(require('./middlewares/cors'));
app.use(require("./routes"));

app.listen(3000);