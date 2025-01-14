import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ComboBox } from './ComboBox';
import { ComboBoxProps } from './types';

const meta: Meta = {
  title: 'ComboBox',
  component: ComboBox,
  argTypes: {
    onChange: { action: 'changed' },
    onSelect: { action: 'selected' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const Template: StoryFn<ComboBoxProps> = (args) => <ComboBox {...args} />;

// Default ComboBox with basic options
export const Default = Template.bind({});
Default.args = {
  options: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'],
  noResultsMessage: 'No fruits found.',
};

// ComboBox with loading state
export const WithLoading = Template.bind({});
WithLoading.args = {
  ...Default.args,
  loading: true,
};

// ComboBox with error message
export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: 'Failed to load data.',
};

// ComboBox with recent selections
export const WithRecentSelections = Template.bind({});
WithRecentSelections.args = {
  ...Default.args,
  recentSelections: ['Apple', 'Banana'],
};

// ComboBox with custom matching function
export const WithCustomMatching = Template.bind({});
WithCustomMatching.args = {
  ...Default.args,
  matchFn: (option, inputValue) => option.startsWith(inputValue),
};

// ComboBox with disabled state
export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  ariaDisabled: true,
};

// ComboBox with clear button hidden
export const WithoutClearButton = Template.bind({});
WithoutClearButton.args = {
  ...Default.args,
  showClearButton: false,
};

// ComboBox with long list of options
export const WithLongList = Template.bind({});
WithLongList.args = {
  options: Array.from({ length: 100 }, (_, i) => `Option ${i + 1}`),
  noResultsMessage: 'No options found.',
};

// ComboBox with custom styles
export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  ...Default.args,
  style: { width: '500px', border: '2px solid #FF902F' },
  className: 'custom-combobox',
};

// ComboBox with no options
export const WithNoOptions = Template.bind({});
WithNoOptions.args = {
  options: [],
  noResultsMessage: 'No options available.',
};

// ComboBox with default value
export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  ...Default.args,
  defaultValue: 'Banana',
};

// ComboBox with required attribute
export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  ariaRequired: true,
};

// ComboBox with invalid state
export const Invalid = Template.bind({});
Invalid.args = {
  ...Default.args,
  ariaInvalid: true,
};

// ComboBox with custom aria label
export const WithCustomAriaLabel = Template.bind({});
WithCustomAriaLabel.args = {
  ...Default.args,
  ariaLabel: 'Fruit Selection',
};

// ComboBox with custom role
export const WithCustomRole = Template.bind({});
WithCustomRole.args = {
  ...Default.args,
  role: 'searchbox',
};

// ComboBox with custom tab index
export const WithCustomTabIndex = Template.bind({});
WithCustomTabIndex.args = {
  ...Default.args,
  tabIndex: -1,
};

// ComboBox with test ID
export const WithTestId = Template.bind({});
WithTestId.args = {
  ...Default.args,
  testId: 'combobox-test-id',
};
