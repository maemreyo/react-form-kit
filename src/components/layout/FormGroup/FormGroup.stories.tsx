import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FormGroup } from './FormGroup';
import { FormGroupProps } from './types';

const meta: Meta = {
  title: 'FormGroup',
  component: FormGroup,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<FormGroupProps> = (args) => <FormGroup {...args} />;

export const Default = Template.bind({});

Default.args = {};
