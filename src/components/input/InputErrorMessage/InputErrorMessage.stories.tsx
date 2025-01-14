import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { InputErrorMessage } from './InputErrorMessage';
import { InputErrorMessageProps } from './types';

const meta: Meta = {
  title: 'InputErrorMessage',
  component: InputErrorMessage,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<InputErrorMessageProps> = (args) => <InputErrorMessage {...args} />;

export const Default = Template.bind({});

Default.args = {};
