import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_SUMMONER_LEAGUES = 'GET_SUMMONER_LEAGUES';

/**
 * INITIAL STATE
 */
const defaultSummonerLeagues = {};

/**
 * ACTION CREATORS
 */
export const getSummonerLeagues = summonerLeagues => ({
  type: GET_SUMMONER_LEAGUES,
  summonerLeagues
});

/**
 * THUNK CREATORS
 */

export const fetchSummonerLeagues = summonerId => dispatch =>
  axios
    .get(`/api/summoners/${summonerId}/leagues`)
    .then(res => res.data)
    .then(summonerLeagues => {
      console.log('SUMMONER LEAGUES: ', summonerLeagues);
      dispatch(getSummonerLeagues(summonerLeagues));
    })
    .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function(state = defaultSummonerLeagues, action) {
  switch (action.type) {
    case GET_SUMMONER_LEAGUES:
      return action.summonerLeagues;
    default:
      return state;
  }
}
