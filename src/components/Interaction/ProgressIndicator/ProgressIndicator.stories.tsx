import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ProgressIndicator } from './ProgressIndicator';
import { ProgressIndicatorProps } from './types';

export default {
  title: 'Components/ProgressIndicator',
  component: ProgressIndicator,
  argTypes: {
    type: {
      control: 'select',
      options: ['linear', 'circular'],
      defaultValue: 'linear',
    },
    value: {
      control: { type: 'range', min: 0, max: 100 },
      defaultValue: 50,
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    showLabel: {
      control: 'boolean',
      defaultValue: false,
    },
    isIndeterminate: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as Meta;

const Template: StoryFn<ProgressIndicatorProps> = (args) => (
  <ProgressIndicator {...args} />
);

export const Linear = Template.bind({});
Linear.args = {
  type: 'linear',
  value: 50,
  showLabel: true,
};

export const Circular = Template.bind({});
Circular.args = {
  type: 'circular',
  value: 75,
  showLabel: true,
  size: 'large',
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  isIndeterminate: true,
  type: 'linear',
};

export const WithOverlay = Template.bind({});
WithOverlay.args = {
  value: 30,
  overlay: true,
  overlayBlur: 'medium',
};

export const WithCancelButton = Template.bind({});
WithCancelButton.args = {
  value: 60,
  cancelButton: true,
  onCancel: () => alert('Progress canceled'),
};
