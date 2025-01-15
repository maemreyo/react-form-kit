import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Popover } from './Popover';
import { PopoverProps } from './types';

const meta: Meta = {
  title: 'Components/Popover',
  component: Popover,
  argTypes: {
    triggerAction: {
      control: 'select',
      options: ['click', 'hover', 'focus'],
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    animation: {
      control: 'select',
      options: ['fade', 'slide', 'none'],
    },
    overlayBlur: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
  },
};

export default meta;

const Template: StoryFn<PopoverProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: '100px' }}>
      <Popover
        {...args}
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  trigger: <button>Click me</button>,
  content: <div>This is a popover content</div>,
  position: 'bottom',
  triggerAction: 'click',
  animation: 'fade',
  arrow: true,
  closeButton: true,
};

export const WithOverlay = Template.bind({});
WithOverlay.args = {
  ...Default.args,
  overlay: true,
  overlayColor: 'rgba(0, 0, 0, 0.5)',
  overlayBlur: 'small',
};

export const HoverTrigger = Template.bind({});
HoverTrigger.args = {
  ...Default.args,
  triggerAction: 'hover',
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  ...Default.args,
  maxWidth: '400px',
  arrowColor: '#f0f0f0',
  style: {
    padding: '20px',
    backgroundColor: '#f0f0f0',
  },
};
