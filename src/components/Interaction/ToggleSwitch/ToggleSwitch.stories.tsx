import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ToggleSwitch } from './ToggleSwitch';
import { ToggleSwitchProps } from './types';

const meta: Meta = {
  title: 'ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});

Default.args = {};
