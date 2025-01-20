import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FormStepper } from './FormStepper';
import { FormStepperProps } from './types';
import { Check, Circle, AlertCircle } from 'lucide-react';

export default {
  title: 'Components/FormStepper',
  component: FormStepper,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: StoryFn<FormStepperProps> = (args) => <FormStepper {...args} />;

const sampleSteps = [
  {
    title: 'Personal Info',
    content: <div>Step 1: Enter personal information</div>,
  },
  {
    title: 'Address',
    content: <div>Step 2: Enter address details</div>,
  },
  {
    title: 'Review',
    content: <div>Step 3: Review and submit</div>,
  },
];

export const Default = Template.bind({});
Default.args = {
  steps: sampleSteps,
};

export const WithCustomIcons = Template.bind({});
WithCustomIcons.args = {
  steps: sampleSteps,
  icons: {
    completed: <Check size={20} />,
    active: <Circle size={20} />,
    upcoming: <AlertCircle size={20} />,
  },
};

export const Vertical = Template.bind({});
Vertical.args = {
  steps: sampleSteps,
  vertical: true,
};

export const NonLinear = Template.bind({});
NonLinear.args = {
  steps: sampleSteps,
  linear: false,
};
