import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { InputIcon } from './InputIcon';
import { InputIconProps } from './types';

const meta: Meta = {
  title: 'InputIcon',
  component: InputIcon,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<InputIconProps> = (args) => <InputIcon {...args} />;

export const Default = Template.bind({});

Default.args = {};
