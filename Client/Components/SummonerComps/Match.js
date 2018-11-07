import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import domain from '../../../Server/domain';
const key = process.env.LOL_API_KEY;

class Match extends Component {
  constructor() {
    super();
    this.state = {
      match: {},
      matchDetails: {}
    };
  }

  componentDidMount() {
    // fetch(`${domain}/match/v3/matches/{matchId}?api_key=${key}`);
  }

  render() {
    const { game } = this.props;
    console.log('MATCH PROPS: ', this.props);
    console.log('KEY: ', key);
    return (
      <Container>
        <div className="banner shadow">
          <h1>{game.gameId}</h1>
        </div>
      </Container>
    );
  }
}

export default Match;
