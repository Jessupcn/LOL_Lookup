import React from 'react';
import { connect } from 'react-redux';

const LeagueBadge = props => {
  // console.log('LEAGUE BADGE PROPS!!! ', props);
  return (
    <div className="bannerLeagueContainer">
      <div className="bannerLeagueBadge gold">Hi</div>
      <div className="bannerLeagueBadge silver">Hi</div>
      <div className="bannerLeagueBadge master">Hi</div>
    </div>
  );
};

export default LeagueBadge;
