import styled from 'styled-components';
import { rem } from 'polished';
import palette from 'app/palette';

export const Wrapper = styled.div`
  input, button {
    height: ${rem(55)};
  }
  input {
    background-color: ${palette.white};
    border-radius: ${rem(4)} 0 0 ${rem(4)} !important;
    border ${rem(1)} solid ${palette.white};
  }
  input:focus {
    border ${rem(1)} solid ${palette.orangeText};
    background-color: ${palette.lightOrange};
  }
  input[disabled] {
    opacity: .666;
  }
  button {
    min-width: ${rem(96)};
    border-radius: 0 ${rem(4)} ${rem(4)} 0;
  }
  button.disabled.alert {
    opacity: .666;
  }
  
  @media (max-height: ${rem(480)}) {
    input, button {
      height: ${rem(44)};
    }
    input {
      border-radius: ${rem(3)} 0 0 ${rem(3)} !important;
    }
    button {
      border-radius: 0 ${rem(3)} ${rem(3)} 0;
    }
  }
`;
