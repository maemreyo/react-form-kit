import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FormTabs } from './FormTabs';
import { FormTabsProps } from './types';

const meta: Meta = {
  title: 'FormTabs',
  component: FormTabs,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<FormTabsProps> = (args) => <FormTabs {...args} />;

export const Default = Template.bind({});

Default.args = {};
