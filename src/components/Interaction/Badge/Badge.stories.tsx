import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Badge } from './Badge';
import { BadgeProps } from './types';

const meta: Meta = {
  title: 'Badge',
  component: Badge,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});

Default.args = {};
