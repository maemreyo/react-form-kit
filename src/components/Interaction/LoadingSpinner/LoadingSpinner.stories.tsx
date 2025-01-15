import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { LoadingSpinner } from './LoadingSpinner';
import { LoadingSpinnerProps } from './types';

export default {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
  argTypes: {
    type: {
      control: 'select',
      options: ['circular', 'dots', 'bars'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    speed: {
      control: 'select',
      options: ['slow', 'normal', 'fast'],
    },
    color: {
      control: 'color',
    },
    thickness: {
      control: 'number',
    },
    isVisible: {
      control: 'boolean',
    },
    overlay: {
      control: 'boolean',
    },
    overlayColor: {
      control: 'color',
    },
    overlayBlur: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    message: {
      control: 'text',
    },
    messagePosition: {
      control: 'select',
      options: ['below', 'above', 'side'],
    },
    reverse: {
      control: 'boolean',
    },
    center: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: StoryFn<LoadingSpinnerProps> = (args) => (
  <LoadingSpinner {...args} />
);

export const Circular = Template.bind({});
Circular.args = {
  type: 'circular',
  size: 'medium',
  color: '#FF902F',
  speed: 'normal',
  thickness: 2,
  message: 'Loading...',
};

export const Dots = Template.bind({});
Dots.args = {
  type: 'dots',
  size: 'medium',
  color: '#FF902F',
  speed: 'normal',
  thickness: 2,
  message: 'Loading...',
};

export const Bars = Template.bind({});
Bars.args = {
  type: 'bars',
  size: 'medium',
  color: '#FF902F',
  speed: 'normal',
  thickness: 2,
  message: 'Loading...',
};

export const WithOverlay = Template.bind({});
WithOverlay.args = {
  type: 'circular',
  size: 'large',
  color: '#FF902F',
  overlay: true,
  overlayColor: 'rgba(255, 255, 255, 0.9)',
  overlayBlur: 'small',
  message: 'Please wait...',
};
