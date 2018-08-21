import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchSummoner from './SearchSummoner';
import { fetchSummoner } from '../redux_store';

/*
HOME COMPONENT
*/
class Home extends Component {
  componentDidMount() {
    this.props.loadSummoner();
  }
  render() {
    return (
      <div>
        <SearchSummoner />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadSummoner: () => {
    const action = fetchSummoner('WolverineUM');
    return dispatch(action);
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
