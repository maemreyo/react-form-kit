import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FileUpload } from './FileUpload';
import { FileUploadProps } from './types';

export default {
  title: 'Components/FileUpload',
  component: FileUpload,
  argTypes: {
    accept: {
      control: 'text',
      description: 'Accepted file types',
      table: {
        type: { summary: 'string | string[]' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
    dragDrop: {
      control: 'boolean',
      description: 'Enable drag and drop',
    },
    preview: {
      control: 'boolean',
      description: 'Show file preview for images',
    },
    maxFileSize: {
      control: 'number',
      description: 'Maximum file size in bytes',
    },
  },
} as Meta;

const Template: StoryFn<FileUploadProps> = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonLabel: 'Choose File',
  accept: 'image/*',
  multiple: false,
  dragDrop: false,
  preview: true,
  showFileName: true,
  showFileSize: true,
};

export const WithDragDrop = Template.bind({});
WithDragDrop.args = {
  ...Default.args,
  dragDrop: true,
  multiple: true,
};

export const ImageUpload = Template.bind({});
ImageUpload.args = {
  ...Default.args,
  accept: 'image/*',
  preview: true,
  dragDrop: true,
  multiple: true,
  maxFileSize: 5 * 1024 * 1024, // 5MB
};

export const DocumentUpload = Template.bind({});
DocumentUpload.args = {
  ...Default.args,
  accept: '.pdf,.doc,.docx',
  preview: false,
  showFileSize: true,
};

export const WithValidation = Template.bind({});
WithValidation.args = {
  ...Default.args,
  validation: {
    maxSize: 1024 * 1024, // 1MB
    allowedTypes: ['image/jpeg', 'image/png'],
  },
  dragDrop: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
