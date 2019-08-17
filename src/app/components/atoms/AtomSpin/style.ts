import styled, { createGlobalStyle } from 'styled-components';

export const KeyFrames = createGlobalStyle`
  @keyframes LogoSpin-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Spin = styled.span`
  svg {
    animation: LogoSpin-spin infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
  }
`;
