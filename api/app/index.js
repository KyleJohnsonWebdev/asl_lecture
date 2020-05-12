// load in the imports
const error = require('debug')('api:error');
const express = require('express');
const morganDebug = require('morgan-debug');
// routes
const decisionRouter = require('./routes/decisions');
const optionRouter = require('./routes/options');
// create an express app
const app = express();
// checks to see if the content-type is json and parses it into req.body
app.use(express.json());
// log all requests
app.use(morganDebug('api:request', 'dev'));
// setup the app to use the router at /decisions
app.use('/decisions', decisionRouter);
// four params are required to mark this as a error handling middleware
// setup the app to use the router at /options
app.use('/options', optionRouter);
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  error('ERROR FOUND:', err);
  res.sendStatus(500);
});

// export the express app
module.exports = app;
