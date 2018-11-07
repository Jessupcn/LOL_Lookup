import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Home, SummonerView, Champions } from './components';

/**
 * COMPONENT
 */
const Routes = () => {
  return (
    <Switch>
      {/* Routes placed here are available to all visitors */}
      <Route path="/summoner/:summonerName" component={SummonerView} />
      <Route path="/champions" component={Champions} />
      <Route exact path="/" component={Home} />
      {/* Displays our Home component as a fallback */}
      <Route component={Home} />
    </Switch>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  console.log('REDUX STORE STATE: ', state);
  return {};
};

const mapDispatch = dispatch => {
  return {};
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Routes)
);
