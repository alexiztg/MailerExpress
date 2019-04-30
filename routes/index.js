const express = require('express');
const app = express();
const json = require('./json')
const mail = require('./mail')

app.use('/json', json)
app.use('/mail', mail)

module.exports =  app;