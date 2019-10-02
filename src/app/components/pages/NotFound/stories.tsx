import React from 'react';
import { storyBuilder } from 'core/stories';
import NotFound from './';

export const scenes = {
  'default': () => <NotFound />,
};

storyBuilder(
  scenes,
  'pages/NotFound',
);
