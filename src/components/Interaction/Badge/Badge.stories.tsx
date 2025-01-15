import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Badge } from './Badge';
import { BadgeProps } from './types';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    content: {
      control: 'text',
      description: 'Content to be displayed inside the badge',
    },
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
      description: 'Type of the badge',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the badge',
    },
    shape: {
      control: 'select',
      options: ['rounded', 'square', 'circle'],
      description: 'Shape of the badge',
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      description: 'Position of the badge',
    },
  },
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => (
  <div style={{ padding: '40px' }}>
    <Badge {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  content: '1',
  type: 'default',
  size: 'medium',
  shape: 'rounded',
  position: 'top-right',
};

export const Primary = Template.bind({});
Primary.args = {
  content: 'New',
  type: 'primary',
  size: 'medium',
  shape: 'rounded',
  position: 'top-right',
};

export const WithMaxCount = Template.bind({});
WithMaxCount.args = {
  content: 150,
  type: 'error',
  size: 'medium',
  maxCount: 99,
  shape: 'rounded',
  position: 'top-right',
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  content: '!',
  type: 'warning',
  size: 'small',
  shape: 'circle',
  tooltip: 'Important notification',
  position: 'top-right',
};

export const Interactive = Template.bind({});
Interactive.args = {
  content: 'Click me',
  type: 'primary',
  size: 'large',
  shape: 'rounded',
  isInteractive: true,
  onClick: () => alert('Badge clicked!'),
  position: 'top-right',
};
