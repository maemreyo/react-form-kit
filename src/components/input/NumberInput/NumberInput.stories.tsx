import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { NumberInput } from './NumberInput';
import { NumberInputProps } from './types';

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
  argTypes: {
    value: { control: 'number' },
    defaultValue: { control: 'number' },
    step: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    format: {
      control: 'select',
      options: ['number', 'currency', 'percentage'],
    },
    locale: { control: 'text' },
    currency: { control: 'text' },
    allowNegative: { control: 'boolean' },
    precision: { control: 'number' },
    clampValue: { control: 'boolean' },
    showButtons: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<NumberInputProps> = (args) => <NumberInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: 0,
  step: 1,
};

export const Currency = Template.bind({});
Currency.args = {
  defaultValue: 1000,
  format: 'currency',
  precision: 2,
};

export const Percentage = Template.bind({});
Percentage.args = {
  defaultValue: 50,
  format: 'percentage',
  min: 0,
  max: 100,
  step: 5,
};

export const WithLimits = Template.bind({});
WithLimits.args = {
  defaultValue: 50,
  min: 0,
  max: 100,
  clampValue: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  defaultValue: 42,
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  defaultValue: 42,
  readOnly: true,
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  defaultValue: 42,
  tooltip: 'Enter a number between 0 and 100',
  min: 0,
  max: 100,
};
