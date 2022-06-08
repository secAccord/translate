const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./router')
const api = require('./api')

app.use(api)
app.use(router)
app.use(cors())
app.use(express.json())
module.exports = app;
