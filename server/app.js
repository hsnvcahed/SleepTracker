const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');
const routes = require('./routes/main');

const { notFound, errorHandler } = require('./middleware/errorHandler');
require('colors');
require('dotenv').config();

app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '/public')));
app.use(helmet());

app.use(express.json());

app.use('/', routes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT ?? 3000;

console.log('LISTENING TO PORT ', PORT);

app.listen(PORT);