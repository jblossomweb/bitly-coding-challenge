import styled from 'styled-components';
import { rem } from 'polished';
import palette from 'app/palette';

export const Wrapper = styled.div`
  text-align: center;
`;

export const Header = styled.header`
  background-color: ${palette.darkGray};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(${rem(10)} + 2vmin);
  color: white;
`;
