import React from 'react';
import window from 'window-or-global';
import { storyBuilder, KnobsInterface } from 'core/stories';
import BitlyFoundation from 'app/components/templates/BitlyFoundation';
import InputForm, { Props } from '.';

export const mockProps: Props = {
  value: 'Value',
  buttonText: 'Button',
  onChange: (_event: React.ChangeEvent<HTMLInputElement>) => {
    window.console.log('onChange');
  },
  onSubmit: (_event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    window.alert('onSubmit');
  },
};

export const renderScene = (
  knobProps: Props,
) => (
  knobs: KnobsInterface,
  props: Props = knobProps,
) => (
  <InputForm
    value={knobs.text('value', props.value)}
    placeholder={props.placeholder && knobs.text('placeholder', props.placeholder)}
    buttonText={knobs.text('buttonText', props.buttonText)}
    disabled={knobs.boolean('disabled', !!props.disabled)}
    fetching={knobs.boolean('fetching', !!props.fetching)}
    onChange={props.onChange}
    onSubmit={props.onSubmit}
  />
);

export const scenes = {
  'sample': renderScene({
    ...mockProps,
  }),
  'placeholder': renderScene({
    ...mockProps,
    value: '',
    placeholder: 'Placeholder',
  }),
  'disabled, fetching': renderScene({
    ...mockProps,
    disabled: true,
    fetching: true,
  }),
};

storyBuilder(
  scenes,
  'molecules/InputForm',
  BitlyFoundation,
);
