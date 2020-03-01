const express = require('express');
const app = express();
const port = 3003;

app.get('/', function(req, res){
    res.send('<h1>Hello Express framework</h1>');
});

app.listen(port, console.log('Express is running...'));