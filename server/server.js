const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    setTimeout(() => {
        res.send('pong')
    },15000)
});

app.listen(process.env.PORT || 8080);
