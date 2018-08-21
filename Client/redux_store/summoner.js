import axios from 'axios';
import domain from '../domain';

/**
 * ACTION TYPES
 */
const GET_SUMMONER = 'GET_SUMMONER';

/**
 * INITIAL STATE
 */
const defaultSummoner = {};

/**
 * ACTION CREATORS
 */
export const getSummoner = summoner => ({
  type: GET_SUMMONER,
  summoner
});

/**
 * THUNK CREATORS
 */

export const fetchSummoner = summonerName => dispatch =>
  axios
    .get(
      `${domain}/summoner/v3/summoners/by-name/${summonerName}?api_key=${
        process.env.LOL_API_KEY
      }`
    )
    .then(res => res.data)
    .then(summoner => {
      console.log('SUMMONER: summoner');
      dispatch(getSummoner(summoner));
    })
    .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function(state = defaultSummoner, action) {
  switch (action.type) {
    case GET_SUMMONER:
      return action.summoner;
    default:
      return state;
  }
}
