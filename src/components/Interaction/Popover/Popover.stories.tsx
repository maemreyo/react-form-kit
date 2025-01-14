import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Popover } from './Popover';
import { PopoverProps } from './types';

const meta: Meta = {
  title: 'Popover',
  component: Popover,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<PopoverProps> = (args) => <Popover {...args} />;

export const Default = Template.bind({});

Default.args = {};
