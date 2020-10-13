var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Welcome to home page, \n Feature provided: \n get, get by id, post users in /users \n get profile data in /users/profile (after login in /login)');
});

module.exports = router;
