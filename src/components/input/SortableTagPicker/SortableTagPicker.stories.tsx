// SortableTagPicker.stories.tsx
import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SortableTagPicker } from './SortableTagPicker';
import { SortableTagPickerProps, Option } from './types';
import styled from 'styled-components';

const meta: Meta = {
  title: 'Components/SortableTagPicker',
  component: SortableTagPicker,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A component that combines combobox functionality with a draggable list for selecting and ordering tags.',
      },
    },
  },
};

export default meta;

// Sample data
const sampleOptions: Option[] = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'gatsby', label: 'Gatsby' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'nodejs', label: 'Node.js' },
  { value: 'python', label: 'Python' },
];

// Styled components for custom rendering
const CustomTag = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .icon {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const CustomPill = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  background-color: ${(props) => props.theme.colors['primary-100']};
  border-radius: 12px;

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

// Template for all stories
const Template: StoryFn<SortableTagPickerProps> = (args) => (
  <SortableTagPicker {...args} />
);

// Basic usage
export const Default = Template.bind({});
Default.args = {
  options: sampleOptions,
  placeholder: 'Select technologies...',
};

// With default values
export const WithDefaultValues = Template.bind({});
WithDefaultValues.args = {
  options: sampleOptions,
  defaultValue: ['react', 'typescript'],
  placeholder: 'Select technologies...',
};

// Controlled component
export const Controlled: StoryFn<SortableTagPickerProps> = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([
    'react',
    'typescript',
  ]);

  return (
    <SortableTagPicker
      options={sampleOptions}
      value={selectedValues}
      onChange={setSelectedValues}
      placeholder="Select technologies..."
    />
  );
};

// With maximum items limit
export const WithMaxItems = Template.bind({});
WithMaxItems.args = {
  options: sampleOptions,
  maxItems: 3,
  placeholder: 'Select up to 3 technologies...',
};

// Disabled state
export const Disabled = Template.bind({});
Disabled.args = {
  options: sampleOptions,
  disabled: true,
  defaultValue: ['react', 'typescript'],
  placeholder: 'This picker is disabled',
};

// With error state
export const WithError = Template.bind({});
WithError.args = {
  options: sampleOptions,
  error: 'Please select at least one technology',
  placeholder: 'Select technologies...',
};

// Loading state
export const Loading = Template.bind({});
Loading.args = {
  options: sampleOptions,
  loading: true,
  placeholder: 'Loading options...',
};

// Custom rendering
export const CustomRendering = Template.bind({});
CustomRendering.args = {
  options: sampleOptions,
  renderItem: (option: Option) => (
    <CustomTag>
      <span className="icon" />
      <span>{option.label}</span>
    </CustomTag>
  ),
  renderPill: (option: Option) => (
    <CustomPill>
      <span className="dot" />
      <span>{option.label}</span>
    </CustomPill>
  ),
  placeholder: 'Select with custom rendering...',
};

// With custom filtering
export const CustomFiltering = Template.bind({});
CustomFiltering.args = {
  options: sampleOptions,
  filterOption: (input: string, option: Option) => {
    return (
      option.label.toLowerCase().includes(input.toLowerCase()) ||
      option.value.toLowerCase().includes(input.toLowerCase())
    );
  },
  placeholder: 'Try searching by value or label...',
};

// Async loading simulation
export const AsyncLoading: StoryFn<SortableTagPickerProps> = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchText: string) => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const filtered = sampleOptions.filter((option) =>
      option.label.toLowerCase().includes(searchText.toLowerCase())
    );
    setOptions(filtered);
    setLoading(false);
  };

  return (
    <SortableTagPicker
      options={options}
      onSearch={handleSearch}
      loading={loading}
      placeholder="Type to search technologies..."
    />
  );
};

// With validation
export const WithValidation: StoryFn<SortableTagPickerProps> = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [error, setError] = useState<string>('');

  const handleChange = (values: string[]) => {
    setSelectedValues(values);
    if (values.length < 2) {
      setError('Please select at least 2 technologies');
    } else if (values.length > 4) {
      setError('You can select up to 4 technologies');
    } else {
      setError('');
    }
  };

  return (
    <SortableTagPicker
      options={sampleOptions}
      value={selectedValues}
      onChange={handleChange}
      error={error}
      placeholder="Select 2-4 technologies..."
    />
  );
};

// With keyboard navigation
export const KeyboardNavigation = Template.bind({});
KeyboardNavigation.args = {
  options: sampleOptions,
  onKeyDown: (e) => {
    console.log('Key pressed:', e.key);
  },
  placeholder: 'Use keyboard to navigate...',
};

// RTL support
export const RTLSupport = Template.bind({});
RTLSupport.args = {
  options: [
    { value: 'ar-1', label: 'مثال ١' },
    { value: 'ar-2', label: 'مثال ٢' },
    { value: 'ar-3', label: 'مثال ٣' },
  ],
  placeholder: 'اختر العناصر...',
  style: { direction: 'rtl' },
};

// ControlledWithFeedback story
export const ControlledWithFeedback: StoryFn<SortableTagPickerProps> = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([
    'react',
    'typescript',
  ]);

  const handleOnChange = (values: string[]) => {
    console.log('Selected values changed:', values);
    setSelectedValues(values);
  };

  return (
    <div>
      <p>Selected Values: {selectedValues.join(', ')}</p>
      <button
        onClick={() => setSelectedValues([...selectedValues, 'vue'])}
        disabled={selectedValues.includes('vue')}
      >
        Add Vue
      </button>
      <button
        onClick={() =>
          setSelectedValues(selectedValues.filter((v) => v !== 'typescript'))
        }
        disabled={!selectedValues.includes('typescript')}
      >
        Remove TypeScript
      </button>
      <SortableTagPicker
        options={sampleOptions}
        value={selectedValues}
        onChange={handleOnChange}
        placeholder="Select technologies..."
      />
    </div>
  );
};
