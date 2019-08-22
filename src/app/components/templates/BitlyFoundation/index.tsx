import React from 'react';
import { Grid, Cell } from 'react-foundation';
import NavBar from 'app/components/molecules/NavBar';

import 'foundation-sites/dist/css/foundation.min.css';
import * as Style from './style';

const BitlyFoundation: React.FC = ({ children }) => (
  <Style.Wrapper>
    <Style.KeyFrames />
    <NavBar StyleComponent={Style.Nav} logoWidth={Style.logoWidth} />
    <Style.Content>
      <Grid className="display">
        <Cell small={3} medium={0} large={0}></Cell>
        <Cell small={6} medium={12} large={12}>{children}</Cell>
        <Cell small={3} medium={0} large={0}></Cell>
      </Grid>
    </Style.Content>
  </Style.Wrapper>
);

export default BitlyFoundation;
