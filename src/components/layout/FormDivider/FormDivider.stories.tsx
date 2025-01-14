import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FormDivider } from './FormDivider';
import { FormDividerProps } from './types';

const meta: Meta = {
  title: 'FormDivider',
  component: FormDivider,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<FormDividerProps> = (args) => <FormDivider {...args} />;

export const Default = Template.bind({});

Default.args = {};
