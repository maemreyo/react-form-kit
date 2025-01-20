import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FormTabs } from './FormTabs';
import { FormTabsProps } from './types';
import { Home, Settings, User } from 'lucide-react';

export default {
  title: 'Components/FormTabs',
  component: FormTabs,
  parameters: {
    layout: 'padded',
  },
} as Meta;

const Template: StoryFn<FormTabsProps> = (args) => <FormTabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      key: 'tab1',
      label: 'Profile',
      icon: <User size={16} />,
      content: <div>Profile Content</div>,
    },
    {
      key: 'tab2',
      label: 'Dashboard',
      icon: <Home size={16} />,
      content: <div>Dashboard Content</div>,
    },
    {
      key: 'tab3',
      label: 'Settings',
      icon: <Settings size={16} />,
      content: <div>Settings Content</div>,
    },
  ],
  variant: 'underline',
  position: 'top',
};

export const ButtonVariant = Template.bind({});
ButtonVariant.args = {
  ...Default.args,
  variant: 'buttons',
};

export const VerticalTabs = Template.bind({});
VerticalTabs.args = {
  ...Default.args,
  position: 'left',
};

export const WithDisabledTab = Template.bind({});
WithDisabledTab.args = {
  ...Default.args,
  tabs: [
    ...Default.args.tabs,
    {
      key: 'tab4',
      label: 'Disabled',
      content: <div>Disabled Content</div>,
      disabled: true,
    },
  ],
};
