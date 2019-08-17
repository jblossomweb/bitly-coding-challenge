import React from 'react';
import { ReactComponent as Atom } from './atom.svg';
import * as Style from './style';

const AtomSpin: React.FC = () => (
  <React.Fragment>
    <Style.KeyFrames />
    <Style.Spin>
      <Atom />
    </Style.Spin>
  </React.Fragment>
);

export default AtomSpin;
