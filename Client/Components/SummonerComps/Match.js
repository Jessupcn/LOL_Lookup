import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

const Match = props => {
  console.log('MATCH PROPS: ', props);
  return (
    <Container>
      <div className="banner shadow">
        <h1>Hi there</h1>
      </div>
    </Container>
  );
};

export default Match;
