import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TextAreaControl } from './TextAreaControl';
import { TextAreaControlProps } from './types';

const meta: Meta = {
  title: 'Form Controls/TextAreaControl',
  component: TextAreaControl,
  argTypes: {
    value: {
      control: 'text',
      description: 'Current value of the textarea',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    minHeight: {
      control: 'text',
      description: 'Minimum height of textarea',
    },
    maxHeight: {
      control: 'text',
      description: 'Maximum height of textarea',
    },
    showCharacterCount: {
      control: 'boolean',
      description: 'Show character count',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters allowed',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable textarea',
    },
    resize: {
      control: {
        type: 'select',
        options: ['none', 'both', 'horizontal', 'vertical'],
      },
      description: 'Resize behavior',
    },
  },
};

export default meta;

const Template: StoryFn<TextAreaControlProps> = (args) => (
  <TextAreaControl {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter your text here...',
  showCharacterCount: true,
};

export const WithCharacterLimit = Template.bind({});
WithCharacterLimit.args = {
  placeholder: 'Limited to 100 characters...',
  showCharacterCount: true,
  maxLength: 100,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'This textarea is disabled',
  disabled: true,
  value: 'Disabled content',
};

export const CustomSized = Template.bind({});
CustomSized.args = {
  placeholder: 'Custom sized textarea',
  minHeight: '150px',
  maxHeight: '300px',
  resize: 'none',
};
