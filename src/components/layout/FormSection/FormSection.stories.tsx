import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FormSection } from './FormSection';
import { FormSectionProps } from './types';

const meta: Meta = {
  title: 'FormSection',
  component: FormSection,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<FormSectionProps> = (args) => <FormSection {...args} />;

export const Default = Template.bind({});

Default.args = {};
