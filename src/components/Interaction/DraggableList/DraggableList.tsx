import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FixedSizeList as List } from 'react-window';
import theme from '../../../theme';
import { DraggableListProps } from './types';
import {
  StyledDraggableList,
  StyledDraggableItem,
  StyledDragHandle,
} from './styled';
import { useDragAndDrop } from './hook';

export const DraggableList = ({
  items,
  onReorder,
  renderItem,
  dragHandle = false,
  className,
  style,
  ariaLabel = 'Draggable List',
  ariaDescribedby,
  ariaInvalid = false,
  ariaRequired = false,
  ariaDisabled = false,
  role,
  tabIndex = 0,
  testId,
}: DraggableListProps) => {
  const [listItems, setListItems] = useState(items);

  const { handleDragStart, handleDragOver, handleDrop, handleKeyDown } =
    useDragAndDrop(listItems, setListItems, onReorder);

  // Render item for react-window
  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => (
    <div style={style}>
      <StyledDraggableItem
        key={listItems[index].id}
        draggable
        onDragStart={(e) =>
          handleDragStart(e as unknown as React.DragEvent<HTMLLIElement>, index)
        } // Ép kiểu ở đây
        onDragOver={(e) =>
          handleDragOver(e as React.DragEvent<HTMLLIElement>, index)
        } // Ép kiểu ở đây
        onDrop={(e) => handleDrop(e as React.DragEvent<HTMLLIElement>, index)} // Ép kiểu ở đây
        onKeyDown={(e) => handleKeyDown(e, index)}
        tabIndex={0}
        role="listitem"
        aria-label={`Item ${index + 1}`}
      >
        {dragHandle && <StyledDragHandle>☰</StyledDragHandle>}
        {renderItem ? renderItem(listItems[index]) : listItems[index].content}
      </StyledDraggableItem>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <StyledDraggableList
        className={className}
        style={style}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        aria-invalid={ariaInvalid}
        aria-required={ariaRequired}
        aria-disabled={ariaDisabled}
        role={role || 'list'}
        tabIndex={tabIndex}
        data-testid={testId}
      >
        <AnimatePresence>
          {listItems.length > 100 ? (
            // Use virtualization for large lists
            <List
              height={500} // Adjust based on your needs
              itemCount={listItems.length}
              itemSize={50} // Adjust based on your needs
              width="100%"
            >
              {Row}
            </List>
          ) : (
            // Render without virtualization for small lists
            listItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <StyledDraggableItem
                  draggable
                  onDragStart={(e) =>
                    handleDragStart(
                      e as unknown as React.DragEvent<HTMLLIElement>,
                      index
                    )
                  } // Ép kiểu ở đây
                  onDragOver={(e) =>
                    handleDragOver(e as React.DragEvent<HTMLLIElement>, index)
                  } // Ép kiểu ở đây
                  onDrop={(e) =>
                    handleDrop(e as React.DragEvent<HTMLLIElement>, index)
                  } // Ép kiểu ở đây
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  tabIndex={0}
                  role="listitem"
                  aria-label={`Item ${index + 1}`}
                >
                  {dragHandle && <StyledDragHandle>☰</StyledDragHandle>}
                  {renderItem ? renderItem(item) : item.content}
                </StyledDraggableItem>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </StyledDraggableList>
    </ThemeProvider>
  );
};

DraggableList.displayName = 'DraggableList';
