import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { CheckboxGroup } from './CheckboxGroup';
import { CheckboxGroupProps } from './types';

const meta: Meta = {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<CheckboxGroupProps> = (args) => <CheckboxGroup {...args} />;

export const Default = Template.bind({});

Default.args = {};
