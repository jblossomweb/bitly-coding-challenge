import React from 'react';
import window from 'window-or-global';
import random from 'lodash/random';
import keyBy from 'lodash/keyBy';
import keys from 'lodash/keys';
import { storyBuilder, KnobsInterface } from 'core/stories';
import bitLinks from 'app/__test__/mocks/bitLinks.json';
import HomePage, { Props } from './HomePage';

const mockLinks = keyBy(bitLinks, 'shortUrl');
const mockLinkUrls = keys(mockLinks);

export const mockProps: Props = {
  fetching: false,
  links: {},
  linkUrls: [],
  shorten: (longUrl: string) => {
    window.alert(`shorten(${longUrl})`);
    return Promise.resolve({
      long_url: longUrl,
      url: mockLinks[0].shortUrl,
    });
  },
  clicks: (shortUrls: string[]) => {
    window.console.log(`clicks(${JSON.stringify(shortUrls)})`);
    return Promise.resolve(shortUrls.map(short_url => ({
      short_url,
      global_clicks: random(0, 1000),
    })));
  },
  hideError: (_event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    window.alert('hideError');
  },
};

export const renderScene = (
  knobProps: Props,
) => (
  knobs: KnobsInterface,
  props: Props = knobProps,
  ) => (
      <HomePage
        fetching={knobs.boolean('fetching', !!props.fetching)}
        links={knobs.object('links', props.links)}
        linkUrls={knobs.object('linkUrls', props.linkUrls)}
        error={knobs.object('error', props.error)}
        shorten={props.shorten}
        clicks={props.clicks}
        hideError={props.hideError}
      />
    );

export const scenes = {
  'default': renderScene({
    ...mockProps,
  }),
  'fetching': renderScene({
    ...mockProps,
    fetching: true,
  }),
  'with links': renderScene({
    ...mockProps,
    links: mockLinks,
    linkUrls: mockLinkUrls,
  }),
};

storyBuilder(
  scenes,
  'pages/Home',
);
