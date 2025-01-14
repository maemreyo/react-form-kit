import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FileUpload } from './FileUpload';
import { FileUploadProps } from './types';

const meta: Meta = {
  title: 'FileUpload',
  component: FileUpload,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<FileUploadProps> = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});

Default.args = {};
