import React from 'react';
import window from 'window-or-global';
import { storyBuilder, KnobsInterface } from 'core/stories';
import BitlyFoundation from 'app/components/templates/BitlyFoundation';
import Notification, { Props } from '.';

export const mockProps: Props = {
  type: 'error',
  title: 'Title',
  message: 'Message',
  onHide: () => {
    window.alert('onHide');
  }
};

export const renderScene = (
  knobProps: Props,
) => (
  knobs: KnobsInterface,
  props: Props = knobProps,
) => (
  <Notification
    type={knobs.select('type', ['error', 'warning', 'success'], props.type)}
    title={knobs.text('title', props.title)}
    message={knobs.text('message', props.message)}
    onHide={props.onHide}
  />
);

export const scenes = {
  'error': renderScene({
    ...mockProps,
    type: 'error',
  }),
  'warning': renderScene({
    ...mockProps,
    type: 'warning',
  }),
  'success': renderScene({
    ...mockProps,
    type: 'success',
  }),
};

storyBuilder(
  scenes,
  'atoms/Notification',
  BitlyFoundation,
);
