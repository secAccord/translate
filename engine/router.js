const express = require('express');
const app = express();
const path = require('path')

app.use('/',express.static(path.join(__dirname,'../dist/home')))
module.exports = app;
