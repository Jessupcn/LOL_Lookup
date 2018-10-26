import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

const Banner = props => {
  console.log('BANNER PROPS: ', props);
  let summoner = props.summoner;
  return (
    <Container>
      <div className="banner shadow">
        {props && props.summoner.name ? (
          <div className="bannerProfIconContainer">
            <img
              className="bannerProfIcon"
              src={`http://ddragon.leagueoflegends.com/cdn/8.20.1/img/profileicon/${
                props.summoner.profileIconId
              }.png`}
            />
          </div>
        ) : null}
        <div className="bannerTitleContainer">
          <h1>{summoner.name ? summoner.name : '1 moment please...'}</h1>
          <p>
            {summoner.summonerLevel
              ? `Level: ${summoner.summonerLevel}`
              : 'loading . . .'}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
