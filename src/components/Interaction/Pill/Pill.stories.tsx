import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Pill } from './Pill';
import { PillProps } from './types';

const meta: Meta = {
  title: 'Pill',
  component: Pill,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<PillProps> = (args) => <Pill {...args} />;

export const Default = Template.bind({});

Default.args = {};
