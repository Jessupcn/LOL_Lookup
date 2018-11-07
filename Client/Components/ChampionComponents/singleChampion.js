import React from 'react';
import { Container } from 'semantic-ui-react';
import LeagueBadge from './LeagueBadge';

const singleChampion = props => {
  console.log('Champion PROPS: ', props);
  return (
    <div>
      <img src={props.champion.image.full} />
    </div>
  );
};

export default singleChampion;
