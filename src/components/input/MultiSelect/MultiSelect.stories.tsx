import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { MultiSelect } from './MultiSelect';
import { MultiSelectProps } from './types';

const meta: Meta = {
  title: 'MultiSelect',
  component: MultiSelect,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<MultiSelectProps> = (args) => <MultiSelect {...args} />;

export const Default = Template.bind({});

Default.args = {};
