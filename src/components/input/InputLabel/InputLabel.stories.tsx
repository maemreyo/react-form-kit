import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputLabel } from './InputLabel';
import { InputLabelProps } from './types';

export default {
  title: 'Components/InputLabel',
  component: InputLabel,
  argTypes: {
    htmlFor: { control: 'text' },
    label: { control: 'text' },
    required: { control: 'boolean' },
    optional: { control: 'boolean' },
    disabled: { control: 'boolean' },
    position: {
      control: { type: 'select', options: ['top', 'left'] },
    },
    tooltip: { control: 'text' },
    tooltipPlacement: {
      control: {
        type: 'select',
        options: ['top', 'right', 'bottom', 'left'],
      },
    },
  },
} as Meta;

const Template: StoryFn<InputLabelProps> = (args) => <InputLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  htmlFor: 'input-example',
  label: 'Username',
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true,
};

export const Optional = Template.bind({});
Optional.args = {
  ...Default.args,
  optional: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  ...Default.args,
  tooltip: 'This is a helpful tooltip',
};

export const LeftPosition = Template.bind({});
LeftPosition.args = {
  ...Default.args,
  position: 'left',
};
