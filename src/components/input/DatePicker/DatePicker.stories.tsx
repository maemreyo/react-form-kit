import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { DatePicker } from './DatePicker';
import { DatePickerProps } from './types';

const meta: Meta = {
  title: 'DatePicker',
  component: DatePicker,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<DatePickerProps> = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});

Default.args = {};
