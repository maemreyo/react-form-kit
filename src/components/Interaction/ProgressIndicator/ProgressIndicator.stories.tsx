import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ProgressIndicator } from './ProgressIndicator';
import { ProgressIndicatorProps } from './types';

const meta: Meta = {
  title: 'ProgressIndicator',
  component: ProgressIndicator,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<ProgressIndicatorProps> = (args) => <ProgressIndicator {...args} />;

export const Default = Template.bind({});

Default.args = {};
