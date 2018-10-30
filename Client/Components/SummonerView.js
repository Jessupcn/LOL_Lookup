import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchSummoner,
  fetchSummonerLeagues,
  fetchSummonerMatches
} from '../redux_store';
import { Banner } from './SummonerComps';
import { Loader } from 'semantic-ui-react';

/*
HOME COMPONENT
*/
class Summoner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      summoner: {},
      summonerLeagues: [],
      summonerMatches: []
    };
  }

  componentDidMount() {
    this.props.loadSummoner();
  }

  componentWillReceiveProps(props) {
    if (
      props.match.params.summonerName.toLowerCase() !==
      props.summoner.name.toLowerCase()
    ) {
      this.props.loadSummoner();
    }
    if (props.summoner.id) {
      props.loadSummonerData(props.summoner);
    }
    this.setState({
      summoner: props.summoner,
      summonerLeagues: props.summonerLeagues,
      summonerMatches: props.summonerMatches,
      isLoading: false
    });
  }

  render() {
    console.log(`STATE: `, this.state);
    console.log(`PROPS: `, this.props);
    return (
      <div>
        {this.state.isLoading ? (
          <Loader size="massive">Loading</Loader>
        ) : (
          <div>
            <h1>{`Greetings, ${
              this.state.summoner ? this.state.summoner.name : 'Summoner'
            }`}</h1>
            <Banner
              summoner={this.state.summoner}
              summonerLeagues={this.state.summonerLeagues}
            />
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
  return { summoner: state.summoner };
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
)(Summoner);
