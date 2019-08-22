import React from 'react';
import { ServiceInterface } from 'app/services/bitly.service';
import { Link, FormattedError } from 'app/store/BitLinks/types';
import InputForm from 'app/components/molecules/InputForm';
import LinkList from 'app/components/molecules/LinkList';
import ErrorNotification from 'app/components/molecules/ErrorNotification';
import * as Style from './style';

export interface Props {
  fetching: boolean,
  links: Link[],
  shorten: ServiceInterface['shorten'],
  error?: FormattedError,
  hideError: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
};

export interface State {
  inputValue: string,
};

class BitLinks extends React.Component<Props, State> {
  state = {
    inputValue: '',
  };

  handleChange = (value: string) => {
    this.setState({
      inputValue: value,
    });
  };

  handleSubmit = async() => {
    const { shorten } = this.props;
    const { inputValue } = this.state;
    let value = inputValue;
    if (
      !value.startsWith('http://')
      && !value.startsWith('https://')
      && !value.includes('@')
      && value.split('.').length > 1
    ) {
      value = `http://${value}`;
    }
    await shorten(value);
    this.setState({
      inputValue: '',
    });
  };

  render() {
    const { links, error, hideError } = this.props;
    const { fetching } = this.props;
    const { inputValue } = this.state;
    return (
      <Style.Wrapper>
        <InputForm
          value={inputValue}
          placeholder="Paste a link to shorten it"
          buttonText="SHORTEN"
          onChange={e => this.handleChange(e.target.value)}
          onSubmit={this.handleSubmit}
          disabled={fetching}
          fetching={fetching}
        />
        <LinkList
          links={links}
          fetching={fetching}
        />
        {error ? (
          <ErrorNotification error={error} onHide={hideError} />
        ) : null}
      </Style.Wrapper>
    );
  }
}

export default BitLinks;
