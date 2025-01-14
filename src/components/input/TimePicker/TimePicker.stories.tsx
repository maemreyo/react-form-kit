import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TimePicker } from './TimePicker';
import { TimePickerProps } from './types';

const meta: Meta = {
  title: 'TimePicker',
  component: TimePicker,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<TimePickerProps> = (args) => <TimePicker {...args} />;

export const Default = Template.bind({});

Default.args = {};
