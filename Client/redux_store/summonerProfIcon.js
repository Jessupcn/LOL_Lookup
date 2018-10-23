import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_SUMMONER_PROF_ICON = 'GET_SUMMONER_PROF_ICON';

/**
 * INITIAL STATE
 */
const defaultSummonerProfIcon = {};

/**
 * ACTION CREATORS
 */
export const getSummonerProfIcon = summonerProfIcon => ({
  type: GET_SUMMONER_PROF_ICON,
  summonerProfIcon
});

/**
 * THUNK CREATORS
 */

export const fetchSummonerProfIcon = summonerProfIconId => dispatch =>
  axios
    .get(`/api/summoners/profileIcon/${summonerProfIconId}`)
    .then(res => res.data)
    .then(summoner => {
      console.log('SUMMONER: ', summoner);
      dispatch(getSummoner(summoner));
    })
    .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function(state = defaultSummonerProfIcon, action) {
  switch (action.type) {
    case GET_SUMMONER_PROF_ICON:
      return action.summonerProfIcon;
    default:
      return state;
  }
}
