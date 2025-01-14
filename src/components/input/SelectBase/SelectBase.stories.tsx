import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SelectBase } from './SelectBase';
import { SelectBaseProps } from './types';

const meta: Meta = {
  title: 'SelectBase',
  component: SelectBase,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<SelectBaseProps> = (args) => <SelectBase {...args} />;

export const Default = Template.bind({});

Default.args = {};
