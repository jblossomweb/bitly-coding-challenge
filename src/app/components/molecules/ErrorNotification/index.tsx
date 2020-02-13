import React from 'react';
import Notification from 'app/components/atoms/Notification';
import { FormattedError } from 'app/store/BitLinks/types';
import { decodeErrorMessage } from 'app/store/BitLinks/utils';
import * as Style from './style';

export interface Props {
  error: FormattedError,
  onHide: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
};

const ErrorNotification: React.FC<Props> = ({
  error,
  onHide,
}) => {
  const title: string = error.code ? 'API Error' : 'Error';
  const message: string = decodeErrorMessage(error);
  return (
    <Style.Wrapper>
      <Notification
        type={`error`}
        title={title}
        message={message}
        onHide={onHide}
      />
    </Style.Wrapper>
  );
};

export default ErrorNotification;
