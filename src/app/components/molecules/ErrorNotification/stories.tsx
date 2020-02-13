import React from 'react';
import { storyBuilder, KnobsInterface } from 'core/stories';
import BitlyFoundation from 'app/components/templates/BitlyFoundation';
import ErrorNotification, { Props } from '.';

export const mockProps: Props = {
  error: {
    message: 'Error Message'
  },
  onHide: () => {
    alert('onHide');
  }
};

export const renderScene = (
  knobProps: Props,
) => (
  knobs: KnobsInterface,
  props: Props = knobProps,
) => (
  <ErrorNotification
    error={knobs.object('error', props.error)}
    onHide={props.onHide}
  />
);

export const scenes = {
  'error': renderScene({
    ...mockProps,
  }),
  'API error': renderScene({
    ...mockProps,
    error: {
      code: 404,
      message: 'Not Found',
    }
  }),
};

storyBuilder(
  scenes,
  'molecules/ErrorNotification',
  BitlyFoundation,
);
