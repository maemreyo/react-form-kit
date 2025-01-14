import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FormGrid } from './FormGrid';
import { FormGridProps } from './types';

const meta: Meta = {
  title: 'FormGrid',
  component: FormGrid,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<FormGridProps> = (args) => <FormGrid {...args} />;

export const Default = Template.bind({});

Default.args = {};
