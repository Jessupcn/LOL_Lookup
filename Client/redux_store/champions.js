import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_CHAMPIONS = 'GET_CHAMPIONS';

/**
 * INITIAL STATE
 */
const defaultChampions = {};

/**
 * ACTION CREATORS
 */
export const getChampions = champions => ({ type: GET_CHAMPIONS, champions });

/**
 * THUNK CREATORS
 */

export const fetchChampions = () => dispatch =>
  axios
    .get('/api/events')
    .then(res => res.data)
    .then(champions => {
      dispatch(getChampions(champions));
    })
    .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function(state = defaultChampions, action) {
  switch (action.type) {
    case GET_CHAMPIONS:
      return action.champions;
    default:
      return state;
  }
}
