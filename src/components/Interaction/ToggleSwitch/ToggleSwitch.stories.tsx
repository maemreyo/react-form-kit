import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ToggleSwitch } from './ToggleSwitch';
import { ToggleSwitchProps } from './types';

const meta: Meta = {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    labelPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    animation: {
      control: 'radio',
      options: ['smooth', 'none'],
    },
  },
};

export default meta;

const Template: StoryFn<ToggleSwitchProps> = (args) => {
  const [isOn, setIsOn] = useState(false);
  return <ToggleSwitch {...args} isOn={isOn} onChange={setIsOn} />;
};

export const Default = Template.bind({});
Default.args = {
  ariaLabel: 'Toggle Switch',
};

export const WithLabels = Template.bind({});
WithLabels.args = {
  onLabel: 'ON',
  offLabel: 'OFF',
  labelPosition: 'right',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  onColor: '#4CAF50',
  offColor: '#F44336',
  thumbColor: '#FFFFFF',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  onLabel: 'Disabled',
};

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
    <ToggleSwitch size="small" onLabel="Small" />
    <ToggleSwitch size="medium" onLabel="Medium" />
    <ToggleSwitch size="large" onLabel="Large" />
  </div>
);
