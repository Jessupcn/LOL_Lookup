import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_SUMMONER_MATCHES = 'GET_SUMMONER_MATCHES';

/**
 * INITIAL STATE
 */
const defaultSummonerMatches = [];

/**
 * ACTION CREATORS
 */
export const getSummonerMatches = summonerMatches => ({
  type: GET_SUMMONER_MATCHES,
  summonerMatches
});

/**
 * THUNK CREATORS
 */

export const fetchSummonerMatches = accountId => dispatch =>
  axios
    .get(`/api/summoners/${accountId}/matches`)
    .then(res => {
      return res.data.matches;
    })
    .then(summonerMatches => {
      dispatch(getSummonerMatches(summonerMatches));
    })
    .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function(state = defaultSummonerMatches, action) {
  switch (action.type) {
    case GET_SUMMONER_MATCHES:
      return action.summonerMatches;
    default:
      return state;
  }
}
