const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();
const routers = require('./routes')

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(express.urlencoded({ extended: true }));

server.use('/api', routers)

server.get("/", (req, res) => {
    res.send("Welcome to Bookr");
  });

module.exports = server;
