require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('./routers/users-router');
const ticketsRouter = require('./routers/tickets-router');

const server = express();

const apiVersion = 'v1';

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use(`/api/${apiVersion}/users`, usersRouter);
server.use(`/api/${apiVersion}/tickets`, ticketsRouter);

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('DB Connected!'));


server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server;