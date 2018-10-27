import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSummoner, fetchSummonerLeagues } from '../redux_store';
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
      summonerLeagues: []
    };
  }

  componentDidMount() {
    this.props.loadSummonerData();
  }

  componentWillReceiveProps(props) {
    if (
      props.match.params.summonerName.toLowerCase() !==
      props.summoner.name.toLowerCase()
    ) {
      this.props.loadSummonerData();
    }
    if (props.summoner.id) {
      props.loadSummonerLeagues(props.summoner.id);
    }
    this.setState({
      summoner: props.summoner,
      summonerLeagues: props.summonerLeagues,
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
  loadSummonerData() {
    const summonerName = ownProps.match.params.summonerName;
    dispatch(fetchSummoner(summonerName));
  },
  loadSummonerLeagues(accountId) {
    dispatch(fetchSummonerLeagues(accountId));
  }
});

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default connect(
  mapState,
  mapDispatch
)(Summoner);
