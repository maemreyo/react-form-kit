import React from 'react';
import { Story, Meta } from '@storybook/react';
import { InputErrorMessage } from './InputErrorMessage';
import { InputErrorMessageProps } from './types';

export default {
  title: 'Components/InputErrorMessage',
  component: InputErrorMessage,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['error', 'warning', 'info'],
      },
    },
    position: {
      control: {
        type: 'select',
        options: ['below', 'side', 'inside'],
      },
    },
    animation: {
      control: {
        type: 'select',
        options: ['fade', 'slide', 'none'],
      },
    },
  },
} as Meta;

const Template: Story<InputErrorMessageProps> = (args) => (
  <InputErrorMessage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  message: 'This field is required',
  show: true,
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'Please review your input',
  show: true,
  type: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  message: 'Enter at least 8 characters',
  show: true,
  type: 'info',
};

export const WithLink = Template.bind({});
WithLink.args = {
  message: 'Invalid format',
  show: true,
  link: 'https://example.com',
  linkText: 'See guidelines',
};
