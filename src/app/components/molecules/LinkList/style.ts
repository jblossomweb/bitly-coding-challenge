import styled from 'styled-components';
import { rem } from 'polished';
import palette from 'app/palette';

export const Wrapper = styled.div`
  width: ${rem(700)};
  overflow: hidden;
  animation: fadein .5s;
  div.callout {
    border-radius: ${rem(4)};
  }
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: ${rem(28)};
  margin-bottom: ${rem(12)};
`;

export const Link = styled.div`
  max-width: ${rem(700)};
  overflow: hidden;
  text-align: left;
  padding: ${rem(6)};
  margin: ${rem(12)};
  margin-bottom: 0;
  border-bottom: 1px solid ${palette.lightGray};
  animation: fadein .5s;
  :last-child {
    border-bottom: 0px;
  }
`;

export const Title = styled.div`
  max-width: ${rem(600)};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${palette.darkGray};
  font-size: ${rem(14)};
`;

export const LongUrl = styled.div`
  max-width: ${rem(600)};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${palette.lightGray};
  font-size: ${rem(12)};
`;

export const ShortUrl = styled.div`
  line-height: ${rem(12)};
  a {
    color: ${palette.orangeText};
    text-decoration: none;
    font-size: ${rem(12)};
  }
  a:hover {
    color: ${palette.orangeText};
    text-decoration: underline;
  }
`;

export const Clicks = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${palette.lightGray};
  font-size: ${rem(12)};
  line-height: ${rem(12)};
`;

export const Icon = styled.span`
  margin-left: ${rem(6)};
  font-size: ${rem(12)};
  font-family: "Bitly Icon";
  :after {
    content: "\\E605";
  }
`;
