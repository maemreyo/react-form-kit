import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FormRow } from './FormRow';
import { FormRowProps } from './types';

const meta: Meta = {
  title: 'FormRow',
  component: FormRow,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<FormRowProps> = (args) => <FormRow {...args} />;

export const Default = Template.bind({});

Default.args = {};
