import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_MATCH_DETAILS = 'GET_MATCH_DETAILS';

/**
 * INITIAL STATE
 */
const defaultMatchDetails = {};

/**
 * ACTION CREATORS
 */
export const getMatchDetails = matchDetails => ({
  type: GET_MATCH_DETAILS,
  matchDetails
});

/**
 * THUNK CREATORS
 */

export const fetchMatchDetails = gameId => dispatch =>
  axios
    .get(`/api/match/${gameId}`)
    .then(res => res.data)
    .then(matchDetails => {
      dispatch(getMatchDetails(matchDetails));
    })
    .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function(state = defaultMatchDetails, action) {
  switch (action.type) {
    case GET_MATCH_DETAILS:
      return (state[matchDetails.gameId] = matchDetails);
    case REMOVE_MATCH_DETAILS:
      return defaultMatchDetails;
    default:
      return state;
  }
}
