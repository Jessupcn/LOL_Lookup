import React from 'react';
import { Icon, Input } from 'semantic-ui-react';

const SearchSummoner = () => {
  return (
    <Input
      icon={<Icon name="search" inverted circular link />}
      placeholder="Search Summoner..."
    />
  );
};

export default SearchSummoner;
