import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ScrollArea } from './ScrollArea';
import { ScrollAreaProps } from './types';

const meta: Meta = {
  title: 'ScrollArea',
  component: ScrollArea,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<ScrollAreaProps> = (args) => <ScrollArea {...args} />;

export const Default = Template.bind({});

Default.args = {};
