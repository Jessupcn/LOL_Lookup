import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSummoner, fetchSummonerProfIcon } from '../redux_store';
import { Banner } from './SummonerComps';

/*
HOME COMPONENT
*/
class Summoner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      summoner: this.props.summoner
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
    this.setState({ summoner: props.summoner, isLoading: false });
  }

  render() {
    console.log(`STATE: `, this.state);
    console.log(`PROPS: `, this.props);
    return (
      <div>
        <h1>{`Greetings, ${
          this.state.summoner ? this.state.summoner.name : 'Summoner'
        }`}</h1>
        <Banner summoner={this.state.summoner} />
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
    // .then(() => {
    //   dispatch(fetchSummonerProfIcon(this.props.profileIconId));
    // })
    // .catch();
  }
});

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default connect(
  mapState,
  mapDispatch
)(Summoner);
