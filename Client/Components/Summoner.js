import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSummoner } from '../redux_store';

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
    this.props.loadSummoner();
  }

  componentWillReceiveProps(props) {
    this.setState({ summoner: props.summoner });
  }

  render() {
    console.log(`STATE: `, this.state);
    console.log(`PROPS: `, this.props);
    return (
      <div>
        <h1>{`Greetings, ${
          this.state.summoner ? this.state.summoner.name : 'Summoner'
        }`}</h1>
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

const mapDispatch = (dispatch, ownProps) => ({
  loadSummoner: () => {
    const summonerName = ownProps.match.params.summonerName;
    console.log('NAME :', summonerName);
    const action = fetchSummoner(summonerName);
    return dispatch(action);
  }
});

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default connect(
  mapState,
  mapDispatch
)(Summoner);
