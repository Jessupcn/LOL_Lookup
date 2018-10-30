import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import champions from './champions';
import summoner from './summoner';
import summonerLeagues from './summonerLeagues';
import summonerMatches from './summonerMatches';

// create a "combine reducers" in case of future additions

const reducer = combineReducers({
  champions,
  summoner,
  summonerLeagues,
  summonerMatches
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;

// export all from each store component
export * from './champions';
export * from './summoner';
export * from './summonerLeagues';
export * from './summonerMatches';
