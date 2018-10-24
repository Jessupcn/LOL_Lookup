import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

const Banner = props => {
  console.log('BANNER PROPS: ', props);
  return (
    <Container>
      <div className="banner">
        {props && props.summoner.name ? (
          <img
            className="bannerProfIcon"
            src={`http://ddragon.leagueoflegends.com/cdn/8.20.1/img/profileicon/${
              props.summoner.profileIconId
            }.png`}
          />
        ) : null}
        <h1>{props.summoner.name ? props.summoner.name : '1 moment please'}</h1>
      </div>
    </Container>
  );
};

export default Banner;
