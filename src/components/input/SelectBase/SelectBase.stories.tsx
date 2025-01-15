import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SelectBase } from './SelectBase';
import { SelectBaseProps } from './types';

export default {
  title: 'Components/SelectBase',
  component: SelectBase,
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
      defaultValue: 'Select an option...',
    },
  },
} as Meta;

const Template: StoryFn<SelectBaseProps> = (args) => <SelectBase {...args} />;

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
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ],
    },
    {
      label: 'Group 2',
      options: [
        { label: 'Option 3', value: '3' },
        { label: 'Option 4', value: '4' },
      ],
    },
  ],
};

export const Searchable = Template.bind({});
Searchable.args = {
  searchable: true,
  options: [
    { label: 'Apple', value: '1' },
    { label: 'Banana', value: '2' },
    { label: 'Cherry', value: '3' },
  ],
};

export const Clearable = Template.bind({});
Clearable.args = {
  clearable: true,
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
};

export const Error = Template.bind({});
Error.args = {
  error: 'An error occurred',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  placeholder: 'Choose an option...',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  ariaDisabled: true,
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
};

export const VirtualScroll = Template.bind({});
VirtualScroll.args = {
  virtualScroll: true,
  options: Array.from({ length: 100 }, (_, i) => ({
    label: `Option ${i + 1}`,
    value: `${i + 1}`,
  })),
};
