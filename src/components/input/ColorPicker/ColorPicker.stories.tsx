import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ColorPicker } from './ColorPicker';
import { ColorPickerProps } from './types';

const meta: Meta = {
  title: 'ColorPicker',
  component: ColorPicker,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<ColorPickerProps> = (args) => <ColorPicker {...args} />;

export const Default = Template.bind({});

Default.args = {};
