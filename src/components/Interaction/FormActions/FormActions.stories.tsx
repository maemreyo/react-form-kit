import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FormActions } from './FormActions';
import { FormActionsProps } from './types';

const meta: Meta = {
  title: 'FormActions',
  component: FormActions,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<FormActionsProps> = (args) => <FormActions {...args} />;

export const Default = Template.bind({});

Default.args = {};
