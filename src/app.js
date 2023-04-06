const express = require('express');
const cors = require("cors");
const logger = require("morgan");
const swagger = require("./utils/swagger");

const app = express();

const indexRouter = require("./routers/index");
const apiRouter = require("./routers/api");
const {connect} = require("./db/db");

swagger('/swagger', app);
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use('/', indexRouter);
app.use('/api/v1',apiRouter);

connect();

module.exports = app;

