import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ValidationIcon } from './ValidationIcon';
import { ValidationIconProps } from './types';

const meta: Meta = {
  title: 'ValidationIcon',
  component: ValidationIcon,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<ValidationIconProps> = (args) => <ValidationIcon {...args} />;

export const Default = Template.bind({});

Default.args = {};
