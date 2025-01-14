import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ValidationSummary } from './ValidationSummary';
import { ValidationSummaryProps } from './types';

const meta: Meta = {
  title: 'ValidationSummary',
  component: ValidationSummary,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<ValidationSummaryProps> = (args) => <ValidationSummary {...args} />;

export const Default = Template.bind({});

Default.args = {};
