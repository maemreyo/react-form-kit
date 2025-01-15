import React, { forwardRef, useCallback, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledListContainer, StyledItem } from './styled';
import { useListData } from './hooks';
import { ListBaseProps } from './types';
import defaultTheme from '../../../theme';

export const ListBase = forwardRef<HTMLDivElement, ListBaseProps>(
  (props, ref) => {
    const {
      items = [],
      mode = 'default',
      truncateAt = 3,
      overflowIndicator = '+{remaining}',
      itemRenderer,
      listRenderer,
      className,
      style,
      spacing = 'md',
      direction = 'horizontal',
      alignment = 'start',
      maxHeight,
      maxWidth,
      responsive = true,
      wrapItems = true,
      selectable = false,
      multiSelect = false,
      selectedItems = [],
      onSelect,
      draggable = false,
      hoverable = false,
      clickable = false,
      sortBy,
      filterBy,
      groupBy,
      sortDirection = 'asc',
      ariaLabel,
      ariaDescription,
      keyboardNavigation = true,
      focusable = true,
      tabIndex = 0,
      animated = false,
      animationDuration = 200,
      animationType = 'fade',
      exitAnimation = true,
      loading = false,
      loadingRenderer,
      error = null,
      errorRenderer,
      emptyStateRenderer,
      theme = defaultTheme,
    } = props;

    const { processedItems, groupedItems } = useListData(
      items,
      sortBy,
      filterBy,
      groupBy,
      sortDirection
    );

    const handleSelect = useCallback(
      (item: any) => {
        if (!onSelect) return;

        if (multiSelect) {
          const newSelection = selectedItems.includes(item)
            ? selectedItems.filter((i) => i !== item)
            : [...selectedItems, item];
          onSelect(newSelection);
        } else {
          onSelect([item]);
        }
      },
      [multiSelect, selectedItems, onSelect]
    );

    const renderItem = useCallback(
      (item: any, index: number) => {
        const isSelected = selectedItems.includes(item);
        const content = itemRenderer ? itemRenderer(item, index) : String(item);

        return (
          <StyledItem
            key={index}
            $hoverable={hoverable}
            $clickable={clickable || selectable}
            $selectable={selectable}
            $selected={isSelected}
            $mode={mode}
            onClick={() => selectable && handleSelect(item)}
            tabIndex={focusable ? 0 : -1}
            role={selectable ? 'option' : undefined}
            aria-selected={selectable ? isSelected : undefined}
          >
            {content}
          </StyledItem>
        );
      },
      [
        itemRenderer,
        hoverable,
        clickable,
        selectable,
        mode,
        selectedItems,
        handleSelect,
        focusable,
      ]
    );

    const renderedContent = useMemo(() => {
      if (loading && loadingRenderer) {
        return loadingRenderer();
      }

      if (error && errorRenderer) {
        return errorRenderer(error);
      }

      if (processedItems.length === 0 && emptyStateRenderer) {
        return emptyStateRenderer();
      }

      const itemsToRender =
        truncateAt > 0 ? processedItems.slice(0, truncateAt) : processedItems;

      const remainingCount = processedItems.length - itemsToRender.length;
      const renderedItems = itemsToRender.map(renderItem);

      if (remainingCount > 0) {
        const indicator =
          typeof overflowIndicator === 'string'
            ? overflowIndicator.replace('{remaining}', String(remainingCount))
            : overflowIndicator;
        renderedItems.push(
          <StyledItem key="overflow" $mode={mode}>
            {indicator}
          </StyledItem>
        );
      }

      return listRenderer ? listRenderer(renderedItems) : renderedItems;
    }, [
      loading,
      loadingRenderer,
      error,
      errorRenderer,
      processedItems,
      emptyStateRenderer,
      truncateAt,
      overflowIndicator,
      renderItem,
      listRenderer,
      mode,
    ]);

    return (
      <ThemeProvider theme={theme}>
        <StyledListContainer
          ref={ref}
          className={className}
          style={style}
          $direction={direction}
          $alignment={alignment}
          $spacing={spacing}
          $maxHeight={maxHeight}
          $maxWidth={maxWidth}
          $mode={mode}
          $responsive={responsive}
          $wrapItems={wrapItems}
          role={selectable ? 'listbox' : 'list'}
          aria-label={ariaLabel}
          aria-description={ariaDescription}
          tabIndex={tabIndex}
        >
          {renderedContent}
        </StyledListContainer>
      </ThemeProvider>
    );
  }
);

ListBase.displayName = 'ListBase';
