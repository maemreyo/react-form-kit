import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { NumberInput } from './NumberInput';
import { NumberInputProps } from './types';

const meta: Meta = {
  title: 'NumberInput',
  component: NumberInput,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<NumberInputProps> = (args) => <NumberInput {...args} />;

export const Default = Template.bind({});

Default.args = {};
