import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { LoadingSpinner } from './LoadingSpinner';
import { LoadingSpinnerProps } from './types';

const meta: Meta = {
  title: 'LoadingSpinner',
  component: LoadingSpinner,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<LoadingSpinnerProps> = (args) => <LoadingSpinner {...args} />;

export const Default = Template.bind({});

Default.args = {};
