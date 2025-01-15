// InputHelperText/InputHelperText.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { InputHelperText } from './InputHelperText';
import { InputHelperTextProps } from './types';
import { Info, AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';

export default {
  title: 'Components/InputHelperText',
  component: InputHelperText,
  argTypes: {
    text: {
      control: 'text',
      description: 'Helper text content',
    },
    type: {
      control: 'select',
      options: ['info', 'warning', 'error', 'success'],
      description: 'Type of helper text',
    },
    position: {
      control: 'select',
      options: ['below', 'above', 'side'],
      description: 'Position of helper text relative to input',
    },
    animation: {
      control: 'select',
      options: ['fade', 'slide', 'none'],
      description: 'Animation type',
    },
    show: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    truncate: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<InputHelperTextProps> = (args) => (
  <InputHelperText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'This is a helper text',
  type: 'info',
  show: true,
  position: 'below',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: 'This is an info message with icon',
  type: 'info',
  icon: <Info size={16} />,
};

export const Warning = Template.bind({});
Warning.args = {
  text: 'This is a warning message',
  type: 'warning',
  icon: <AlertTriangle size={16} />,
};

export const Error = Template.bind({});
Error.args = {
  text: 'This field is required',
  type: 'error',
  icon: <AlertCircle size={16} />,
};

export const Success = Template.bind({});
Success.args = {
  text: 'Your input has been validated',
  type: 'success',
  icon: <CheckCircle size={16} />,
};

export const WithLink = Template.bind({});
WithLink.args = {
  text: 'Need help with this field?',
  link: 'https://example.com',
  linkText: 'Click here',
};

export const Truncated = Template.bind({});
Truncated.args = {
  text: 'This is a very long helper text that will be truncated when it exceeds the maximum length',
  maxLength: 50,
  truncate: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'This helper text is disabled',
  isDisabled: true,
};

export const Required = Template.bind({});
Required.args = {
  text: 'This field cannot be empty',
  isRequired: true,
  type: 'error',
};
