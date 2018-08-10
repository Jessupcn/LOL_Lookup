const router = require('express').Router();
const data = require('https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/RiotSchmick?api_key=RGAPI-c8d6bc44-1ced-4cf6-aed5-5cd77e5d1479');
module.exports = router;

router.get('/:name', (req, res, next) => {
  data
    .get(`/lol/summoner/v3/summoners/by-name/{summonerName}`)
    .then(summoner => res.status(200).json(summoner))
    .catch(next);
});
