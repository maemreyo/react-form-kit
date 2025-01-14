import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { RadioGroup } from './RadioGroup';
import { RadioGroupProps } from './types';

const meta: Meta = {
  title: 'RadioGroup',
  component: RadioGroup,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<RadioGroupProps> = (args) => <RadioGroup {...args} />;

export const Default = Template.bind({});

Default.args = {};
