import styled, { createGlobalStyle } from 'styled-components';
import { rem } from 'polished';
import palette from 'app/palette';

import backgroundImage from 'app/images/background-image.png';

export const logoWidth: number = 120;
export const menuHeight: number = 120;

export const KeyFrames = createGlobalStyle`
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

export const FixedBackground = styled.header`
  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const Wrapper = styled(FixedBackground)`
  min-height: 100vh;
  font-size: ${rem(21)};
  font-family: "Proxima Nova", Helvetica, Roboto, Arial, sans-serif;
  color: ${palette.whiteText};
  a {
    color: ${palette.whiteText};
  }
  a:hover {
    color: ${palette.whiteText};
  }
  h1 {
    font-family: "Proxima Nova Semibold", Helvetica, Roboto, Arial, sans-serif;
    font-size: ${rem(48)};
  }

  @media (max-width: ${rem(760)}) {
    div.small-3 {
      width: ${rem(20)};
    }

    div.small-6,
    div.callout {
      width: ${rem(340)};
    }
  }

  @media (max-width: ${rem(640)}) {
    div.small-3 {
      width: ${rem(10)};
    }

    div.small-6,
    div.callout {
      width: ${rem(320)};
    }

    font-size: ${rem(16)};
    h1 {
      font-size: ${rem(28)};
    }
  }

  @media (max-width: ${rem(480)}) {
    font-size: ${rem(14)};
    h1 {
      font-size: ${rem(24)};
    }
  }

  @media (max-width: ${rem(320)}) {
    div.small-3 {
      width: ${rem(10)};
    }

    div.small-6,
    div.callout {
      width: ${rem(300)};
    }
  }

  @media (max-height: ${rem(480)}) {
    font-size: ${rem(14)};
    h1 {
      font-size: ${rem(24)};
    }
  }
`;

export const Nav = styled(FixedBackground)`
  height: ${rem(menuHeight)};
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;
  display: flex;
  justify-content: center;

  ul {
    padding: ${rem(10)};
  }

  li {
    padding: ${rem(18)};
    font-size: calc(${rem(12)} + 0.5vmin);
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  li:first-child {
    margin-right: ${rem(36)};
  }

  li:last-child {
    margin-right: ${rem(288)};
  }

  @media (max-width: ${rem(1024)}) {
    li {
      padding: ${rem(12)};
      font-size: ${rem(20)};
    }

    li:last-child {
      margin-right: ${rem(144)};
    }
  }

  @media (max-width: ${rem(900)}) {
    ul {
      padding: ${rem(8)};
    }

    li {
      padding: ${rem(2)};
      font-size: ${rem(16)};
    }

    li:first-child {
      margin-right: ${rem(28)};
    }

    li:last-child {
      margin-right: ${rem(144)};
    }
  }

  @media (max-width: ${rem(760)}) {
    ul {
      padding: ${rem(8)};
    }

    li {
      padding: ${rem(1)};
      font-size: ${rem(14)};
    }

    li:first-child {
      margin-right: ${rem(14)};
    }

    li:last-child {
      margin-right: ${rem(72)};
    }
  }

  @media (max-width: ${rem(640)}) {
    height: ${rem(menuHeight / 2)};

    ul {
      padding: ${rem(0.0625)};
    }

    li {
      padding: ${rem(0.0625)};
      font-size: ${rem(1)};
      img {
        width: ${rem(logoWidth / 2.5)};
      }
    }

    li:first-child {
      margin-right: 0;
    }

    li:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: ${rem(360)}) {
    height: ${rem(menuHeight / 2)};
    ul {
      padding: ${rem(0.0425)};
    }

    li {
      padding: 0;
      font-size: ${rem(0.5)};
      a {
        padding: ${rem(8)};
      }
    }
  }
`;

export const Content = styled.header`
  min-height: calc(100vh - ${rem(menuHeight)});
  padding-top: ${rem(menuHeight)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
`;