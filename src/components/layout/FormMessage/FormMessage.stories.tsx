import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FormMessage } from './FormMessage';
import { FormMessageProps } from './types';

const meta: Meta = {
  title: 'FormMessage',
  component: FormMessage,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<FormMessageProps> = (args) => <FormMessage {...args} />;

export const Default = Template.bind({});

Default.args = {};
