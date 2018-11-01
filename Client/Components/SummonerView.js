import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchSummoner,
  fetchSummonerLeagues,
  fetchSummonerMatches
} from '../redux_store';
import { Banner, Match } from './SummonerComps';
import { Loader, Segment } from 'semantic-ui-react';

/*
SUMMONER VIEW COMPONENT
*/
class SummonerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      matchesShown: 0
    };
  }

  componentWillReceiveProps(props) {
    let matchesShown = 0;

    console.log('RECEIVINGGGG: ', props);
    // load the new summoner if the component does not unmount,
    // but a new summoner is selected
    // if (
    //   props.match.params.summonerName.toLowerCase() !==
    //   props.summoner.name.toLowerCase()
    // ) {
    //   this.props.loadSummoner();
    // }

    // if there is a current summoner, load the data for that summoner
    if (props.summoner.id && this.state.isLoading) {
      props.loadSummonerData(props.summoner);
    }

    // Working with how many recent matches to show
    console.log(
      'SUMMONER MATCHES IN RECEIVE: ',
      props.summonerMatches,
      props.matchesShown
    );
    if (props.summonerMatches && !props.summonerMatches.length) {
      matchesShown = 0;
    } else if (props.summonerMatches && props.summonerMatches.length < 10) {
      matchesShown = props.summonerMatches.length;
    } else {
      matchesShown = 10;
    }

    this.setState({
      isLoading: false,
      matchesShown: matchesShown
    });
  }

  buildMatches(matches) {
    console.log(
      'HERES THE MATCHES TO BUILD: ',
      matches.slice(0, this.state.matchesShown)
    );
    matches.slice(0, this.state.matchesShown).map(match => {
      return <Match key={match.gameId} match={match} />;
    });
  }

  render() {
    const { summoner, summonerLeagues, summonerMatches } = this.props;
    console.log(`STATE: `, this.state);
    console.log(`PROPS: `, this.props);
    console.log(`isShown: `, this.state.matchesShown);
    return (
      <div>
        {this.state.isLoading ? (
          <Loader active size="massive" inline="centered">
            Loading Summoner...
          </Loader>
        ) : (
          <div>
            <h1>{`Greetings, ${summoner ? summoner.name : 'Summoner'}`}</h1>
            <Banner summoner={summoner} summonerLeagues={summonerLeagues} />
            {this.state.matchesShown > 0 && summonerMatches.length ? (
              this.buildMatches(summonerMatches)
            ) : (
              <h1>Sorry, we don't see any match data :(</h1>
            )}
          </div>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    summoner: state.summoner,
    summonerLeagues: state.summonerLeagues,
    summonerMatches: state.summonerMatches
  };
};

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me());
//       dispatch(fetchProducts());
//       dispatch(fetchCategories());
//       dispatch(fetchSingleCart());
//       dispatch(fetchUserOrders());
//     }
//   };
// };

const mapDispatch = (dispatch, ownProps) => ({
  loadSummoner() {
    const summonerName = ownProps.match.params.summonerName;
    dispatch(fetchSummoner(summonerName));
  },
  loadSummonerData(summoner) {
    dispatch(fetchSummonerLeagues(summoner.id));
    dispatch(fetchSummonerMatches(summoner.accountId));
  }
});

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default connect(
  mapState,
  mapDispatch
)(SummonerView);
