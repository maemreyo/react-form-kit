import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ScrollArea } from './ScrollArea';
import { ScrollAreaProps } from './types';

const meta: Meta = {
  title: 'ScrollArea',
  component: ScrollArea,
  argTypes: {
    smoothScrolling: {
      control: 'boolean',
      defaultValue: true,
    },
    overflowX: {
      control: { type: 'select' },
      options: ['auto', 'scroll', 'hidden'],
      defaultValue: 'auto',
    },
    overflowY: {
      control: { type: 'select' },
      options: ['auto', 'scroll', 'hidden'],
      defaultValue: 'auto',
    },
    scrollAnimationDuration: {
      control: 'number',
      defaultValue: 300,
    },
    focusTrap: {
      control: 'boolean',
      defaultValue: false,
    },
  },
};

export default meta;

const Template: StoryFn<ScrollAreaProps> = (args) => (
  <ScrollArea {...args} style={{ height: '300px', width: '100%' }}>
    <div style={{ padding: '20px' }}>
      {Array.from({ length: 50 }, (_, i) => (
        <div key={i} style={{ marginBottom: '10px' }}>
          Scrollable content item {i + 1}
        </div>
      ))}
    </div>
  </ScrollArea>
);

export const Default = Template.bind({});
Default.args = {};

export const CustomScrollbar = Template.bind({});
CustomScrollbar.args = {
  scrollbarStyle: {
    '--scrollbar-width': '10px',
    '--scrollbar-track-color': '#f1f1f1',
    '--scrollbar-thumb-color': '#888',
  },
};

export const HorizontalScroll = Template.bind({});
HorizontalScroll.args = {
  overflowX: 'scroll',
  overflowY: 'hidden',
  style: {
    height: 'auto',
    width: '100%',
  },
  children: (
    <div style={{ display: 'flex', padding: '20px' }}>
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          style={{
            minWidth: '200px',
            marginRight: '20px',
            padding: '20px',
            background: '#f5f5f5',
          }}
        >
          Horizontal item {i + 1}
        </div>
      ))}
    </div>
  ),
};
