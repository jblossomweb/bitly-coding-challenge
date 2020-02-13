import React from 'react';
import { Button, ButtonGroup, Colors } from 'react-foundation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import * as Style from './style';

export interface Props {
  value: string,
  placeholder?: string,
  buttonText: string,
  disabled?: boolean,
  fetching?: boolean,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onSubmit: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
};

const InputForm: React.FC<Props> = ({
  value,
  placeholder,
  buttonText,
  disabled,
  fetching,
  onChange,
  onSubmit,
}) => (
  <Style.Wrapper>
    <div className="input-group">
      <input
        className="input-group-field"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            onSubmit();
          }
        }}
      />
      <ButtonGroup>
        <Button color={Colors.ALERT} onClick={onSubmit} isDisabled={disabled}>
          {fetching ? (
            <FontAwesomeIcon icon={faSpinner} spin />
          ) : buttonText}
        </Button>
      </ButtonGroup>
    </div>
  </Style.Wrapper>
);

export default InputForm;
