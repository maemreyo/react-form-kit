import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { InputHelperText } from './InputHelperText';
import { InputHelperTextProps } from './types';

const meta: Meta = {
  title: 'InputHelperText',
  component: InputHelperText,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<InputHelperTextProps> = (args) => <InputHelperText {...args} />;

export const Default = Template.bind({});

Default.args = {};
