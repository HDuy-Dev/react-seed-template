import { fn } from '@storybook/test';

import { Button } from './button';

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export const Default = {
  args: {
    children: 'Default',
    variant: 'default',
    size: 'default',
  },
};
