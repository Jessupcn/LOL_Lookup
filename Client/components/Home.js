import React from 'react';
import { connect } from 'react-redux';
import { SearchSummoner } from './SearchSummoner';

/*
HOME COMPONENT
*/
class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchSummoner />
      </div>
    );
  }
}
