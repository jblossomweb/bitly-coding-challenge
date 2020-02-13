import React from 'react';
import window from 'window-or-global';
import { storyBuilder, KnobsInterface } from 'core/stories';
import BitlyFoundation from 'app/components/templates/BitlyFoundation';
import mockLinks from 'app/__test__/mocks/bitLinks.json';
import BitLinks, { Props } from '.';

export const mockProps: Props = {
  fetching: false,
  links: mockLinks,
  shorten: (longUrl: string) => {
    window.alert(`shorten(${longUrl})`);
    return Promise.resolve({
      long_url: longUrl,
      url: mockLinks[0].shortUrl,
    });
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
  <BitLinks
    fetching={knobs.boolean('fetching', !!props.fetching)}
    links={knobs.object('links', props.links)}
    error={knobs.object('error', props.error)}
    shorten={props.shorten}
    hideError={props.hideError}
  />
);

export const scenes = {
  'sample': renderScene({
    ...mockProps,
  }),
  'empty': renderScene({
    ...mockProps,
    links: [],
  }),
  'fetching': renderScene({
    ...mockProps,
    fetching: true,
  }),
  'error': renderScene({
    ...mockProps,
    error: {
      message: 'Sample Error',
    },
  }),
  'api error': renderScene({
    ...mockProps,
    error: {
      code: 400,
      message: 'Sample API Error',
    },
  }),
};

storyBuilder(
  scenes,
  'organisms/BitLinks',
  BitlyFoundation,
);
