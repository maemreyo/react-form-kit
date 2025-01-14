import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { InputControl } from './InputControl';
import { InputControlProps } from './types';

const meta: Meta = {
  title: 'InputControl',
  component: InputControl,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<InputControlProps> = (args) => <InputControl {...args} />;

export const Default = Template.bind({});

Default.args = {};
