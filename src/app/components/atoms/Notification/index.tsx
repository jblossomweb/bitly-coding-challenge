import React from 'react';
import { Button, Callout, Colors, Sizes } from 'react-foundation';
import { CalloutColors } from 'react-foundation/enums';
import * as Style from './style';

export interface Props {
  type: 'error' | 'warning' | 'success',
  title: string,
  message: string,
  onHide: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

const Notification: React.FC<Props> = ({ type, title, message, onHide }) => {
  let color: CalloutColors;
  switch (type) {
    case 'error':
      color = Colors.ALERT;
      break;
    case 'warning':
      color = Colors.WARNING;
      break;
    case 'success':
    default:
      color = Colors.SUCCESS;
  }
  return (
    <Style.Wrapper>
      <Callout color={color}>
        <h3>{title}</h3>
        <p>{message}</p>
        <Style.CloseButton>
          <Button color={Colors.ALERT} size={Sizes.SMALL} onClick={onHide}>
            X
          </Button>
        </Style.CloseButton>
      </Callout>
    </Style.Wrapper>
  );
};

export default Notification;
