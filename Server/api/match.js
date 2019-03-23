const router = require('express').Router();
const axios = require('axios');
const domain = require('../domain.js');
const key = process.env.LOL_API_KEY;
module.exports = router;

// Fetch Single Game Details
router.get('/:matchId', (req, res, next) => {
  axios
    .get(
      `${domain}/match/v4/matches/${
      req.params.matchId
      }?api_key=${key}`
    )
    .then(singleMatchInfo => singleMatchInfo.data)
    .then(data => res.status(200).send(data))
    .catch(next);
});
