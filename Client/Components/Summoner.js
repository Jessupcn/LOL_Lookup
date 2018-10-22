import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchSummoner from './SearchSummoner';

/*
HOME COMPONENT
*/
class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <SearchSummoner />
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return { summoner: state.summoner };
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
