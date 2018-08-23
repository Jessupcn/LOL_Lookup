import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchSummoner from './SearchSummoner';

/*
HOME COMPONENT
*/
class Home extends Component {
  componentDidMount() {
    // this.props.loadSummoner();
  }
  render() {
    return (
      <div>
        <SearchSummoner />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

export default connect(
  null,
  null
)(Home);
