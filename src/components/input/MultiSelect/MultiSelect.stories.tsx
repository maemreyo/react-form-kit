import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { MultiSelect } from './MultiSelect';
import { MultiSelectProps } from './types';

const meta: Meta = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  argTypes: {
    searchable: {
      control: 'boolean',
      defaultValue: true,
    },
    clearable: {
      control: 'boolean',
      defaultValue: true,
    },
    loading: {
      control: 'boolean',
      defaultValue: false,
    },
    error: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Select...',
    },
  },
};

export default meta;

const Template: StoryFn<MultiSelectProps> = (args) => <MultiSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
};

export const WithGroups = Template.bind({});
WithGroups.args = {
  options: [
    {
      label: 'Group 1',
      options: [
        { label: 'Option 1.1', value: '1.1' },
        { label: 'Option 1.2', value: '1.2' },
      ],
    },
    {
      label: 'Group 2',
      options: [
        { label: 'Option 2.1', value: '2.1' },
        { label: 'Option 2.2', value: '2.2' },
      ],
    },
  ],
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: 'This field is required',
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};
