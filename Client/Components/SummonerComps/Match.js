import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
const axios = require('axios');

class Match extends Component {
  constructor() {
    super();
    this.state = {
      match: {},
      matchDetails: {}
    };
  }

  componentDidMount() {
    this.fetchMatchDetails(this.props.game.gameId)
  }

  fetchMatchDetails(matchId) {
    axios.get(`/api/match/${matchId}`)
      .then(res => res.data)
      .then(matchDetails => {
        this.setState({ matchDetails })
      })

  }


  render() {
    const { game } = this.props;
    // console.log('MATCH PROPS: ', this.props);
    // console.log('KEY: ', key);
    console.log(`SINGLE GAME STATE`, this.state)
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
