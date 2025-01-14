import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FormStepper } from './FormStepper';
import { FormStepperProps } from './types';

const meta: Meta = {
  title: 'FormStepper',
  component: FormStepper,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<FormStepperProps> = (args) => <FormStepper {...args} />;

export const Default = Template.bind({});

Default.args = {};
