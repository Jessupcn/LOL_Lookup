const router = require('express').Router();
module.exports = router;

// require in various api routes
// router.use('/champions', require('./champions'));
router.use('/summoners', require('./summoners'));

// error handling
router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
