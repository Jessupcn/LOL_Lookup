import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import LeagueBadge from './LeagueBadge';

const Banner = props => {
  // console.log('BANNER PROPS: ', props);
  // let summoner = props.summoner;
  // let summonerLeagues = props.summonerLeagues;

  let { summoner, summonerLeagues } = props;
  return (
    <Container>
      <div className="banner shadow">
        {props && props.summoner.name ? (
          <div className="bannerProfIconContainer">
            <img
              className="bannerProfIcon"
              src={`http://ddragon.leagueoflegends.com/cdn/8.20.1/img/profileicon/${
                summoner.profileIconId
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
        <LeagueBadge summonerLeagues={summonerLeagues} />
      </div>
    </Container>
  );
};

export default Banner;
