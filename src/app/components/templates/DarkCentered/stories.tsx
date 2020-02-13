import React from 'react';
import { storyBuilder, KnobsInterface } from 'core/stories';
import DarkCentered from './';

export const mockProps = {
  children: 'Child Content',
};

export const renderScene = (
  knobProps: { children: string },
) => (
  knobs: KnobsInterface,
  props = knobProps,
  ) => (
      <DarkCentered>
        {knobs.text('children', props.children)}
      </DarkCentered>
    );

export const scenes = {
  'template': renderScene({
    ...mockProps,
  }),
};

storyBuilder(
  scenes,
  'templates/DarkCentered',
);
