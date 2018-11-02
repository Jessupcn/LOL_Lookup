import React from 'react';
import { connect } from 'react-redux';
import summoner from '../../redux_store/summoner';

const LeagueBadge = props => {
  console.log('LEAGUE BADGE PROPS!!! ', props);
  let { summonerLeagues } = props;
  let soloDuo,
    flex5s,
    flex3s = null;

  if (summonerLeagues.length) {
    props.summonerLeagues.forEach(league => {
      if (league.queueType === 'RANKED_SOLO_5x5') soloDuo = league;
      if (league.queueType === 'RANKED_FLEX_SR') flex5s = league;
      if (league.queueType === 'RANKED_SOLO_TT') flex3s = league;
    });
  }

  if (soloDuo) {
    console.log('GOT HEREEEE: ', findLeagueBadgeImage(soloDuo));
  }
  return (
    <div className="bannerLeagueContainer">
      <div
        className={`bannerLeagueBadge ${
          soloDuo ? soloDuo.tier.toLowerCase() : 'unranked'
        }`}
      >
        <p>Solo/Duo</p>
        {soloDuo ? <i src={findLeagueBadgeImage(soloDuo)} /> : null}
      </div>
      <div
        className={`bannerLeagueBadge ${
          flex5s ? flex5s.tier.toLowerCase() : 'unranked'
        }`}
      >
        <p>Flex 5v5</p>
      </div>
      <div
        className={`bannerLeagueBadge ${
          flex3s ? flex3s.tier.toLowerCase() : 'unranked'
        }`}
      >
        <p>Flex 3v3</p>
      </div>
    </div>
  );
};

function findLeagueBadgeImage(league) {
  const numeralToNumber = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5
  };
  const tier = league.tier.toLowerCase();
  const rank = league.rank ? numeralToNumber[league.rank] : null;
  let leagueRank = '';
  if (tier === 'master') leagueRank = 'master';
  else leagueRank = `${tier}_${rank}`;

  return `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-league-tier-names/global/default/assets/images/ranked-crests/${leagueRank}.png`;
}

export default LeagueBadge;
