const router = require('express').Router();
const axios = require('axios');
const domain = require('../domain.js');
const key = process.env.LOL_API_KEY;
module.exports = router;

router.get('/:summonerName', (req, res, next) => {
  axios
    .get(
      `${domain}/summoner/v3/summoners/by-name/${
        req.params.summonerName
      }?api_key=${process.env.LOL_API_KEY}`
    )
    .then(summoner => summoner.data)
    .then(data => res.status(200).send(data))
    .catch(next);
});

router.get('/profileIcon/:profileIconId', (req, res, next) => {
  axios
    .get(
      `http://ddragon.leagueoflegends.com/cdn/8.20.1/img/profileicon/${
        req.params.profileIconId
      }.png`
    )
    .then(summonerProfId => summonerProfId.data)
    .then(data => res.status(200).send(data))
    .catch(next);
});

// async function fetchMatches(data) {
//   const matches = await axios
//     .get(
//       `${domain}/match/v3/matchlists/by-account/${data.accountId}?api_key=${
//         process.env.LOL_API_KEY
//       }`
//     )
//     .then(matches => matches.data)
//     .catch();
//   return matches;
// }

// `https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/{accountId}?api_key=${process.env.LOL_API_KEY}`
