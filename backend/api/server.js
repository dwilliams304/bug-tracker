const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router');
const ticketsRouter = require('./tickets/tickets-router');
const tasksRouter = require('./tasks/tasks-router');

const server = express();

const apiVersion = 'v1';

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use(`/api/${apiVersion}/auth`, authRouter);
server.use(`/api/${apiVersion}/users`, usersRouter);
server.use(`/api/${apiVersion}/tickets`, ticketsRouter);
server.use(`/api/${apiVersion}/tasks`, tasksRouter);


server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server;