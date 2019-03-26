import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
const axios = require('axios');

class Match extends Component {
  constructor() {
    super();
    this.state = {
      match: {},
      matchDetails: {},
      team1: {},
      team2: {}
    };
  }

  componentDidMount() {
    this.fetchMatchDetails(this.props.game.gameId);
  }

  fetchMatchDetails(matchId) {
    axios.get(`/api/match/${matchId}`)
      .then(res => res.data)
      .then(matchDetails => {
        const team1 = {
          participantIdentities: matchDetails.participantIdentities.slice(0, 5),
          participants: matchDetails.participants.slice(0, 5)
        };
        const team2 = {
          participantIdentities: matchDetails.participantIdentities.slice(5),
          participants: matchDetails.participants.slice(5)
        };
        this.setState({ matchDetails, team1, team2 })
      });
  }


  render() {
    const { game } = this.props;
    const imgUrl = `https://cdn.communitydragon.org/latest/champion/${game.champion}/square`;

    // console.log('MATCH PROPS: ', this.props);
    // console.log('KEY: ', key);
    console.log(`SINGLE GAME STATE`, this.state)
    console.log('GAME: ', game)
    return (
      <Container>
        <div className="banner shadow">
          <img src={imgUrl} style={{ height: '100%' }} />
          <h1>{game.gameId}</h1>
        </div>
      </Container>
    );
  }
}

export default Match;
