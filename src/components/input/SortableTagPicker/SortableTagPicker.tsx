import React, {
  forwardRef,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import {
  StyledContainer,
  StyledInputWrapper,
  StyledInput,
  StyledTagList,
  StyledTagItem,
  StyledPill,
  StyledRemoveButton,
  StyledError,
  StyledDropdown,
  StyledOption,
  StyledNoOptions,
  StyledInputContainer,
} from './styled';
import { SortableTagPickerProps, Option } from './types';
import { useDebounce } from './hooks';

export const SortableTagPicker = forwardRef<
  HTMLInputElement,
  SortableTagPickerProps
>(
  (
    {
      value,
      defaultValue = [],
      options = [],
      onChange,
      onOrderChange,
      onSearch,
      onFocus,
      onBlur,
      onKeyDown,
      placeholder = 'Search and select items...',
      disabled = false,
      loading = false,
      error = '',
      maxItems = Infinity,
      className,
      style,
      id,
      name,
      testId = 'sortable-tag-picker',
      inputTestId = 'sortable-tag-picker-input',
      listTestId = 'sortable-tag-picker-list',
      renderItem,
      renderPill,
      renderInputTags,
      filterOption,
      debounceTime = 300,
      sortableProps = {},
      showDraggableList = true,
      ariaLabel = 'Sortable tag picker',
      ariaDescribedby,
      ariaLabelledby,
      ariaRequired = false,
      ariaInvalid = false,
      ariaExpanded = false,
      role = 'combobox',
      listRole = 'listbox',
      itemRole = 'option',
    },
    ref
  ) => {
    const isControlled = value !== undefined;
    const [searchText, setSearchText] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [selectedValues, setSelectedValues] = useState<string[]>(
      isControlled ? (value as string[]) : defaultValue
    );

    useEffect(() => {
      if (isControlled) {
        setSelectedValues(value as string[]);
      }
    }, [isControlled, value]);

    const debouncedSearch = useDebounce((text: string) => {
      onSearch?.(text);
    }, debounceTime);

    const handleRemoveTag = useCallback(
      (valueToRemove: string) => {
        const newValues = selectedValues.filter((v) => v !== valueToRemove);
        if (isControlled) {
          onChange?.(newValues);
        } else {
          setSelectedValues(newValues);
        }
      },
      [selectedValues, onChange, isControlled]
    );

    // Filter options based on search text and already selected values
    const filteredOptions = options.filter((option) => {
      if (selectedValues.includes(option.value)) return false;
      if (!searchText) return true;
      if (filterOption) return filterOption(searchText, option);
      return option.label.toLowerCase().includes(searchText.toLowerCase());
    });

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setSearchText(text);
        debouncedSearch(text);
        setIsOpen(true);
        setHighlightedIndex(0);
      },
      [debouncedSearch]
    );

    const handleSelectOption = useCallback(
      (option: Option) => {
        if (selectedValues.length >= maxItems) return;

        const newValues = [...selectedValues, option.value];
        if (isControlled) {
          onChange?.(newValues);
        } else {
          setSelectedValues(newValues);
        }
        setSearchText('');
        setIsOpen(false);
        inputRef.current?.focus();
      },
      [selectedValues, maxItems, onChange, isControlled]
    );

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        onKeyDown?.(e);

        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            setIsOpen(true);
            setHighlightedIndex((prev) =>
              prev < filteredOptions.length - 1 ? prev + 1 : prev
            );
            break;
          case 'ArrowUp':
            e.preventDefault();
            setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
            break;
          case 'Enter':
            e.preventDefault();
            if (
              isOpen &&
              highlightedIndex >= 0 &&
              filteredOptions[highlightedIndex]
            ) {
              handleSelectOption(filteredOptions[highlightedIndex]);
            }
            break;
          case 'Escape':
            setIsOpen(false);
            break;
        }
      },
      [filteredOptions, highlightedIndex, isOpen, handleSelectOption, onKeyDown]
    );

    // Get selected options
    const selectedOptions = selectedValues
      .map((value) => options.find((opt) => opt.value === value))
      .filter((opt): opt is Option => opt !== undefined);

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          !inputRef.current?.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <ThemeProvider theme={theme}>
        <StyledContainer
          className={className}
          style={style}
          $disabled={disabled}
          $hasError={!!error}
          data-testid={testId}
        >
          <StyledInputWrapper
            $isFocused={isFocused}
            $disabled={disabled}
            $hasError={!!error}
          >
            {renderInputTags
              ? renderInputTags(selectedOptions, handleRemoveTag)
              : selectedValues.map((value) => {
                  const option = options.find((opt) => opt.value === value);
                  if (!option) return null;

                  return (
                    <StyledPill key={value}>
                      {renderPill ? renderPill(option) : option.label}
                      <StyledRemoveButton
                        onClick={() => handleRemoveTag(option.value)}
                        aria-label={`Remove ${option.label}`}
                      >
                        ×
                      </StyledRemoveButton>
                    </StyledPill>
                  );
                })}
            <StyledInputContainer>
              <StyledInput
                ref={ref || inputRef}
                value={searchText}
                onChange={handleInputChange}
                onFocus={(e) => {
                  setIsFocused(true);
                  setIsOpen(true);
                  onFocus?.(e);
                }}
                onBlur={(e) => {
                  setIsFocused(false);
                  onBlur?.(e);
                }}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                disabled={disabled}
                id={id}
                autoComplete="off"
                name={name}
                data-testid={inputTestId}
                role={role}
                aria-label={ariaLabel}
                aria-describedby={ariaDescribedby}
                aria-labelledby={ariaLabelledby}
                aria-required={ariaRequired}
                aria-invalid={ariaInvalid}
                aria-expanded={isOpen}
              />
              <StyledDropdown $isOpen={isOpen} ref={dropdownRef}>
                {loading ? (
                  <StyledNoOptions>Loading...</StyledNoOptions>
                ) : filteredOptions.length === 0 ? (
                  <StyledNoOptions>No options available</StyledNoOptions>
                ) : (
                  filteredOptions.map((option, index) => (
                    <StyledOption
                      key={option.value}
                      onClick={() => handleSelectOption(option)}
                      $isSelected={selectedValues.includes(option.value)}
                      $isHighlighted={index === highlightedIndex}
                      role={itemRole}
                    >
                      {renderItem ? renderItem(option) : option.label}
                    </StyledOption>
                  ))
                )}
              </StyledDropdown>
            </StyledInputContainer>
          </StyledInputWrapper>

          {showDraggableList && (
            <DragDropContext
              onDragEnd={(result) => {
                if (!result.destination) return;

                const items = Array.from(selectedValues);
                const [reorderedItem] = items.splice(result.source.index, 1);
                items.splice(result.destination.index, 0, reorderedItem);

                setSelectedValues(items);
                onOrderChange?.(items);
              }}
            >
              <Droppable droppableId="tag-list">
                {(provided, snapshot) => (
                  <StyledTagList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    $isDragging={snapshot.isDraggingOver}
                    data-testid={listTestId}
                    role={listRole}
                  >
                    {selectedValues.map((value, index) => {
                      const option = options.find((opt) => opt.value === value);
                      if (!option) return null;

                      return (
                        <Draggable
                          key={value}
                          draggableId={value}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <StyledTagItem
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              $isDragging={snapshot.isDragging}
                              role={itemRole}
                            >
                              {renderItem ? renderItem(option) : option.label}
                            </StyledTagItem>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </StyledTagList>
                )}
              </Droppable>
            </DragDropContext>
          )}

          {error && <StyledError role="alert">{error}</StyledError>}
        </StyledContainer>
      </ThemeProvider>
    );
  }
);

SortableTagPicker.displayName = 'SortableTagPicker';
