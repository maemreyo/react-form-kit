import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputBase } from './InputBase';
import { InputBaseProps } from './types';

export default {
  title: 'Components/InputBase',
  component: InputBase,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    status: {
      control: 'select',
      options: ['default', 'error', 'success', 'warning', 'loading'],
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
  },
} as Meta;

const Template: StoryFn<InputBaseProps> = (args) => <InputBase {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
};

export const WithValidation = Template.bind({});
WithValidation.args = {
  placeholder: 'Enter email...',
  type: 'email',
  validationRules: [
    {
      test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: 'Please enter a valid email address',
    },
  ],
  validationTiming: 'onChange',
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  placeholder: 'Search...',
  iconLeft: '🔍',
  clearButton: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled input',
  disabled: true,
};
