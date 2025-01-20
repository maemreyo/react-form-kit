import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { RadioGroup } from './RadioGroup';
import { RadioGroupProps } from './types';

const meta: Meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
    spacing: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;

const Template: StoryFn<RadioGroupProps> = (args) => <RadioGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
  orientation: 'vertical',
  labelPosition: 'right',
  spacing: 'md',
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: 'Please select an option',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const HorizontalLayout = Template.bind({});
HorizontalLayout.args = {
  ...Default.args,
  orientation: 'horizontal',
};

export const CustomSpacing = Template.bind({});
CustomSpacing.args = {
  ...Default.args,
  spacing: 'lg',
};
