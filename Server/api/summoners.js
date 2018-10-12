const router = require('express').Router();
const axios = require('axios');
const domain = require('../domain.js');
const key = process.env.LOL_API_KEY;
module.exports = router;

router.get('/:summonerName', (req, res, next) => {
  console.log('API KEY: ', key);
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
