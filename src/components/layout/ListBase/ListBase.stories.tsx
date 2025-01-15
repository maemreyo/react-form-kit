import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ListBase } from './ListBase';
import { ListBaseProps } from './types';

export default {
  title: 'Components/ListBase',
  component: ListBase,
  argTypes: {
    mode: {
      control: 'select',
      options: ['stacked', 'comma', 'badges', 'default'],
    },
    direction: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    alignment: {
      control: 'select',
      options: ['start', 'center', 'end'],
    },
  },
} as Meta;

const Template: StoryFn<ListBaseProps> = (args) => <ListBase {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
};

export const BadgesMode = Template.bind({});
BadgesMode.args = {
  items: ['Badge 1', 'Badge 2', 'Badge 3'],
  mode: 'badges',
};

export const WithSelection = Template.bind({});
WithSelection.args = {
  items: ['Selectable 1', 'Selectable 2', 'Selectable 3'],
  selectable: true,
  multiSelect: true,
};

export const Grouped = Template.bind({});
Grouped.args = {
  items: [
    { name: 'Item 1', group: 'A' },
    { name: 'Item 2', group: 'A' },
    { name: 'Item 3', group: 'B' },
  ],
  groupBy: 'group',
  itemRenderer: (item) => item.name,
};

export const Loading = Template.bind({});
Loading.args = {
  items: [],
  loading: true,
  loadingRenderer: () => <div>Loading...</div>,
};
