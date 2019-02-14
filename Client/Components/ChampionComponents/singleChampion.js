import React from 'react';
import { Container } from 'semantic-ui-react';

const SingleChampion = props => {
  const { champion } = props
  const imgUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`;
  console.log(champion)

  return (
    <div className="championImgContainer">
      <img src={imgUrl} />
    </div>
  );
};

export default SingleChampion;
