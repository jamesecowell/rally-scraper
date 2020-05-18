const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

app.use(express.json());

app.use('/api', apiRouter);

module.exports = app;
