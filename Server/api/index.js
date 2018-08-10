const router = require('express').Router();
module.exports = router;

// require in various api routes
router.use('/champions', require('./champions'));
router.use('/summoner', require('./summoner'));

// error handling
router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
