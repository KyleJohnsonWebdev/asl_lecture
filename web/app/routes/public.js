// import the express router
const router = require('express').Router();
// load the controller
const decisionCtrl = require('../controllers/decisions');
// GET / - loads the home page
router.get('/', decisionCtrl.renderLanding);
// export the route from this file
module.exports = router;
