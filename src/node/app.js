const express = require('express'),
    app = express();

app.use(require('./middleware/cors'));
app.use(require("./controller/routes"));

app.listen(3000);