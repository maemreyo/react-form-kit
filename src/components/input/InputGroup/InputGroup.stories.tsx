import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { InputGroup } from './InputGroup';
import { InputGroupProps } from './types';

const meta: Meta = {
  title: 'InputGroup',
  component: InputGroup,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<InputGroupProps> = (args) => <InputGroup {...args} />;

export const Default = Template.bind({});

Default.args = {};
