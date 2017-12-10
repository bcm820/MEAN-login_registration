
'use strict'

// express
const express = require('express');
const app = express();

// static
app.use(express.static(__dirname + '/client/dist'));

// body parser
const bp = require('body-parser');
app.use(bp.json());

// CORS
// const cors = require('cors');
// app.use(cors());

// mongoose
require('./server/models/_mongoose');

// specify routers and routes
const authRouter = express.Router();
const usersRouter = express.Router();
const searchRouter = express.Router();
require('./server/routes/authRoutes.js')(authRouter);
require('./server/routes/usersRoutes.js')(usersRouter);
require('./server/routes/searchRoutes.js')(searchRouter);

// connect routers
app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/users/search', searchRouter)

// redirect all URL errors to Angular index
const path = require('path');
app.all("*", (req, res) => { res.sendFile(path.resolve("./client/dist/index.html")) });

// launch server
app.listen(8000);