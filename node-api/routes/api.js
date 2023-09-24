const express = require('express');
const router = express.Router();
const productsRouter = require('./products');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = function (db) {
  router.use(productsRouter(db));

  return router;
};
