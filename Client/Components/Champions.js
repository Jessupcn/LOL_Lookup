import React, { Component } from 'react';
import { Icon, Input, Form } from 'semantic-ui-react';
import history from '../history';

class Champions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      championsData: {}
    };
  }

  componentDidMount() {
    fetch(
      `http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json`
    ).then(results => {
      results.json().then(championsData => {
        this.setState({ championsData: championsData.data });
      });
    });
  }

  render() {
    console.log('STATE: ', this.state);
    return (
      <div>
        <h1>YOOOOOOO</h1>
      </div>
    );
  }
}

export default Champions;
