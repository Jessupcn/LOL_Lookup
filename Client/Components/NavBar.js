import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { SearchSummoner } from './index';

const NavBar = () => {
  return (
    <Menu inverted size="huge">
      <Menu.Item>
        <Icon name="home" size="big" />
      </Menu.Item>
      <Menu.Item position="right">
        <SearchSummoner />
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
