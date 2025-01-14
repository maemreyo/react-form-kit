import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TextAreaControl } from './TextAreaControl';
import { TextAreaControlProps } from './types';

const meta: Meta = {
  title: 'TextAreaControl',
  component: TextAreaControl,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<TextAreaControlProps> = (args) => <TextAreaControl {...args} />;

export const Default = Template.bind({});

Default.args = {};
