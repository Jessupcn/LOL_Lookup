const router = require('express').Router();
const axios = require('axios');
const domain = require('../domain.js');
const key = process.env.LOL_API_KEY;
module.exports = router;

// Fetch Summoner Information
router.get('/:summonerName', (req, res, next) => {
  axios
    .get(
      `${domain}/summoner/v3/summoners/by-name/${
        req.params.summonerName
      }?api_key=${key}`
    )
    .then(summoner => summoner.data)
    .then(data => res.status(200).send(data))
    .catch(next);
});

// Fetch Summoner Leagues
router.get('/:summonerId/leagues', (req, res, next) => {
  axios
    .get(
      `${domain}/league/v3/positions/by-summoner/${
        req.params.summonerId
      }?api_key=${key}`
    )
    .then(summonerLeagueInfo => summonerLeagueInfo.data)
    .then(data => res.status(200).send(data))
    .catch(next);
});

// Fetch Summoner Matches
router.get('/:accountId/matches', (req, res, next) => {
  axios
    .get(
      `${domain}/match/v3/matchlists/by-account/${
        req.params.accountId
      }?api_key=${key}`
    )
    .then(summonerMatchInfo => summonerMatchInfo.data)
    .then(data => res.status(200).send(data))
    .catch(next);
});
