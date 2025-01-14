import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { DraggableList } from './DraggableList';
import { DraggableListProps } from './types';

const meta: Meta = {
  title: 'DraggableList',
  component: DraggableList,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: StoryFn<DraggableListProps> = (args) => (
  <DraggableList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  items: [
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
  ],
  onReorder: (items) => console.log('Reordered items:', items),
  dragHandle: true,
};

export const WithoutDragHandles = Template.bind({});

WithoutDragHandles.args = {
  items: [
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
  ],
  onReorder: (items) => console.log('Reordered items:', items),
  dragHandle: false,
};

export const CustomItemRendering = Template.bind({});

CustomItemRendering.args = {
  items: [
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
  ],
  onReorder: (items) => console.log('Reordered items:', items),
  renderItem: (item) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span>🚀</span>
      <span>{item.content}</span>
    </div>
  ),
  dragHandle: true,
};

export const DisabledList = Template.bind({});

DisabledList.args = {
  items: [
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
  ],
  onReorder: (items) => console.log('Reordered items:', items),
  dragHandle: true,
  ariaDisabled: true,
};

export const LargeList = Template.bind({});

const largeItems = Array.from({ length: 100 }, (_, index) => ({
  id: `${index + 1}`,
  content: `Item ${index + 1}`,
}));

LargeList.args = {
  items: largeItems,
  onReorder: (items) => console.log('Reordered items:', items),
  dragHandle: true,
};

export const AccessibilityTesting = Template.bind({});

AccessibilityTesting.args = {
  items: [
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
  ],
  onReorder: (items) => console.log('Reordered items:', items),
  dragHandle: true,
  ariaLabel: 'Accessible Draggable List',
  ariaDescribedby: 'list-description',
  role: 'list',
  tabIndex: 0,
};

export const EmptyList = Template.bind({});

EmptyList.args = {
  items: [],
  onReorder: (items) => console.log('Reordered items:', items),
  dragHandle: true,
};

export const CustomStyling = Template.bind({});

CustomStyling.args = {
  items: [
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
  ],
  onReorder: (items) => console.log('Reordered items:', items),
  dragHandle: true,
  className: 'custom-draggable-list',
  style: { backgroundColor: '#f0f0f0', padding: '16px', borderRadius: '8px' },
};

export const NestedItems = Template.bind({});

NestedItems.args = {
  items: [
    {
      id: '1',
      content: (
        <div>
          <h3>Item 1</h3>
          <p>Description for Item 1</p>
        </div>
      ),
    },
    {
      id: '2',
      content: (
        <div>
          <h3>Item 2</h3>
          <p>Description for Item 2</p>
        </div>
      ),
    },
    {
      id: '3',
      content: (
        <div>
          <h3>Item 3</h3>
          <p>Description for Item 3</p>
        </div>
      ),
    },
  ],
  onReorder: (items) => console.log('Reordered items:', items),
  dragHandle: true,
};

export const DynamicItems = () => {
  const [items, setItems] = React.useState([
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
  ]);

  const handleAddItem = () => {
    const newItem = {
      id: `${items.length + 1}`,
      content: `Item ${items.length + 1}`,
    };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
      <DraggableList
        items={items}
        onReorder={(newItems) => setItems(newItems as any)}
        dragHandle={true}
        renderItem={(item) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>{item.content}</span>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </div>
        )}
      />
    </div>
  );
};
