import React from 'react';
import { storyBuilder, KnobsInterface } from 'core/stories';
import BitlyFoundation from './';

export const mockProps = {
  children: 'Child Content',
};

export const renderScene = (
  knobProps: { children: string },
) => (
  knobs: KnobsInterface,
  props = knobProps,
  ) => (
      <BitlyFoundation>
        {knobs.text('children', props.children)}
      </BitlyFoundation>
    );

export const scenes = {
  'template': renderScene({
    ...mockProps,
  }),
};

storyBuilder(
  scenes,
  'templates/BitlyFoundation',
);
