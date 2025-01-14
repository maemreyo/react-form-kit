import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FormAccordion } from './FormAccordion';
import { FormAccordionProps } from './types';

const meta: Meta = {
  title: 'FormAccordion',
  component: FormAccordion,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<FormAccordionProps> = (args) => <FormAccordion {...args} />;

export const Default = Template.bind({});

Default.args = {};
