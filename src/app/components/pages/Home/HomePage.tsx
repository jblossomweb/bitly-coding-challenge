import React from 'react';
import values from 'lodash/values';
import { ServiceInterface } from 'app/services/bitly.service';
import { Links, FormattedError } from 'app/store/BitLinks/types';
import BitlyFoundation from 'app/components/templates/BitlyFoundation';
import BitLinks from 'app/components/organisms/BitLinks';

export interface Props {
  fetching: boolean,
  links: Links,
  linkUrls: string[],
  shorten: ServiceInterface['shorten'],
  clicks: ServiceInterface['clicks'],
  error?: FormattedError,
  hideError: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
};

const HomePage: React.FC<Props> = ({
  fetching,
  links,
  shorten,
  error,
  hideError,
}) => (
  <BitlyFoundation>
    <h1>SHORTEN. SHARE. MEASURE.</h1>
    <p>Join Bitly, the world's leading link management platform.</p>
    <BitLinks
      links={values(links)}
      shorten={shorten}
      fetching={fetching}
      error={error}
      hideError={hideError}
    />

  </BitlyFoundation>
);

export default HomePage;
