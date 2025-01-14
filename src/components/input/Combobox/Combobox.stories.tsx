import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Combobox } from './Combobox';
import { ComboboxProps } from './types';

const meta: Meta = {
  title: 'Combobox',
  component: Combobox,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<ComboboxProps> = (args) => <Combobox {...args} />;

export const Default = Template.bind({});

Default.args = {};
