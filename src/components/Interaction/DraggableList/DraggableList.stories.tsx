import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { DraggableList } from './DraggableList';
import { DraggableListProps } from './types';

const meta: Meta = {
  title: 'DraggableList',
  component: DraggableList,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<DraggableListProps> = (args) => (
  <DraggableList {...args} />
);

export const Default = Template.bind({});

Default.args = {};
