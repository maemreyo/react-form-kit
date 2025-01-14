import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { AutoComplete } from './AutoComplete';
import { AutoCompleteProps } from './types';

const meta: Meta = {
  title: 'AutoComplete',
  component: AutoComplete,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<AutoCompleteProps> = (args) => <AutoComplete {...args} />;

export const Default = Template.bind({});

Default.args = {};
