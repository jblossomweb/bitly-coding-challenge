import React from 'react';
import { storyBuilder, KnobsInterface } from 'core/stories';
import BitlyFoundation from 'app/components/templates/BitlyFoundation';
import mockLinks from 'app/__test__/mocks/bitLinks.json';
import LinkList, { Props } from '.';

export const mockProps: Props = {
  links: mockLinks,
};

export const renderScene = (
  knobProps: Props,
) => (
  knobs: KnobsInterface,
  props: Props = knobProps,
) => (
  <LinkList
    links={knobs.object('links', props.links)}
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
};

storyBuilder(
  scenes,
  'molecules/LinkList',
  BitlyFoundation,
);
