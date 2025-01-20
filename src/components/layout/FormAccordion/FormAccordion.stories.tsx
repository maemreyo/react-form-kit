import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FormAccordion } from './FormAccordion';
import { FormAccordionProps } from './types';

const meta: Meta = {
  title: 'Components/FormAccordion',
  component: FormAccordion,
  argTypes: {
    alignment: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    animation: {
      control: 'boolean',
    },
    multipleExpand: {
      control: 'boolean',
    },
  },
};

export default meta;

const Template: StoryFn<FormAccordionProps> = (args) => (
  <FormAccordion {...args} />
);

export const Default = Template.bind({});
Default.args = {
  sections: [
    {
      id: '1',
      title: 'Section 1',
      content: <div>Content for section 1</div>,
    },
    {
      id: '2',
      title: 'Section 2',
      content: <div>Content for section 2</div>,
    },
    {
      id: '3',
      title: 'Section 3 (Disabled)',
      content: <div>Content for section 3</div>,
      disabled: true,
    },
  ],
  gap: '1rem',
  alignment: 'left',
  animation: true,
  multipleExpand: false,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  ...Default.args,
  icons: {
    expand: '+',
    collapse: '-',
  },
};

export const MultipleExpand = Template.bind({});
MultipleExpand.args = {
  ...Default.args,
  multipleExpand: true,
};
