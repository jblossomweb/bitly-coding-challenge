import React from 'react';
import { Link as InternalLink } from 'react-router-dom';
import { Menu, MenuItem } from 'react-foundation';

import ExternalLink from 'app/components/atoms/ExternalLink';
import Logo from 'app/images/logo.svg';

export interface Props {
  StyleComponent: React.FC,
  logoWidth: number,
}

const NavBar: React.FC<Props> = ({ StyleComponent, logoWidth }) => (
  <StyleComponent>
    <Menu>
      <MenuItem>
        <InternalLink to="/home">
          <img src={Logo} width={logoWidth} alt="home" />
        </InternalLink>
      </MenuItem>
      <MenuItem>
        <ExternalLink href="https://bitly.com/pages/resources/webinars/bitly-enterprise-demo">
          TOUR
        </ExternalLink>
      </MenuItem>
      <MenuItem>
        <ExternalLink href="https://bitly.com/pages/why-bitly/enterprise-class">
          ENTERPRISE
        </ExternalLink>
      </MenuItem>
      <MenuItem>
        <ExternalLink href="https://bitly.com/pages/resources">
          RESOURCES
        </ExternalLink>
      </MenuItem>
      <MenuItem>
        <ExternalLink href="https://bitly.com/pages/about">
          ABOUT
        </ExternalLink>
      </MenuItem>
    </Menu>
  </StyleComponent>
);

export default NavBar;
