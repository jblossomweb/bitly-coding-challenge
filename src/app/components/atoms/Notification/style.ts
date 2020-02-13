import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  position: absolute;
  top: ${rem(12)};
  right: ${rem(12)};
  z-index: 2;
  animation: fadein .5s;
  text-align: left;
  font-size: ${rem(14)};
  min-width: ${rem(360)};
  h3 {
    font-size: ${rem(16)};
  }
  button {
    padding: ${rem(4)} ${rem(6)};
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: ${rem(12)};
  right: ${rem(12)};
`;
