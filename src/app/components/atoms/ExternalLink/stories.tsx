import React from 'react';
import { storyBuilder, KnobsInterface } from 'core/stories';
import BitlyFoundation from 'app/components/templates/BitlyFoundation';
import ExternalLink, { Props } from '.';

export const mockProps: Props = {
  href: 'https://www.google.com',
  children: 'Link Text',
};

export const renderScene = (
  knobProps: Props,
) => (
  knobs: KnobsInterface,
  props: Props = knobProps,
) => (
  <ExternalLink href={knobs.text('href', props.href)}>
    {knobs.text('children', props.children as string)}
  </ExternalLink>
);

export const scenes = {
  'sample': renderScene({
    ...mockProps,
  }),
};

storyBuilder(
  scenes,
  'atoms/ExternalLink',
  BitlyFoundation,
);
