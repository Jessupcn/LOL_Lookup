import React, { Component } from 'react';
import { Icon, Input, Form } from 'semantic-ui-react';
import history from '../history';
import { SingleChampion } from './ChampionComponents';

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
      <div className="championsPage">
        <div className="championsContainer">
          {
            Object.keys(this.state.championsData).length
              ? Object.keys(this.state.championsData).map((championName) => {
                let champion = this.state.championsData[championName];
                console.log('CHAMPIONNNNN: ', championName)
                return <SingleChampion key={championName} champion={champion} />
              })
              : null
          }
        </div>
      </div>
    );
  }
}

export default Champions;
