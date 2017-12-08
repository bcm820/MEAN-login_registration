
// express
const express = require('express');
const app = express();

// CORS
const cors = require('cors');
app.use(cors());

// static
app.use(express.static(__dirname + '/angular-app/dist'));

// body parser
const bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// mongoose
require('./server/models/_mongoose');

// create routers
const authRouter = express.Router();
const usersRouter = express.Router();

// add routes
require('./server/routes/authRoutes.js')(authRouter);
require('./server/routes/usersRoutes.js')(usersRouter);

// connect routers
app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter) // validate access

// launch server
app.listen(8000);
