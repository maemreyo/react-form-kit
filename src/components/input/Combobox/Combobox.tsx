import React, {
  forwardRef,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import {
  StyledComboBox,
  StyledInputContainer,
  StyledInput,
  StyledList,
  StyledListItem,
  StyledLoadingIndicator,
  StyledErrorMessage,
  StyledClearButton,
  StyledTag,
  StyledTagRemoveButton,
} from './styled';
import { ComboBoxProps } from './types';
import { useDebounce } from './hooks';
import { matchSuggestion } from './utils';

export const ComboBox = forwardRef<HTMLDivElement, ComboBoxProps>(
  (
    {
      value = [],
      defaultValue = [],
      onChange,
      onSelect,
      options = [],
      matchFn,
      debounceTime = 300,
      loading = false,
      error = '',
      noResultsMessage = 'No results found.',
      recentSelections = [],
      showClearButton = true,
      className,
      style,
      ariaLabel = 'ComboBox',
      ariaDescribedby = '',
      ariaInvalid = false,
      ariaRequired = false,
      ariaDisabled = false,
      role = 'combobox',
      tabIndex = 0,
      testId = null,
      placeholder = 'Select options...',
      renderItem,
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState('');
    const [selectedItems, setSelectedItems] = useState<string[]>(
      value || defaultValue || []
    );
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    const debouncedInputValue = useDebounce(inputValue, debounceTime);

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
      },
      []
    );

    const handleSelect = useCallback(
      (selectedValue: string | { label: string; value: string }) => {
        const selectedItemValue =
          typeof selectedValue === 'string'
            ? selectedValue
            : selectedValue.value;
        if (!selectedItems.includes(selectedItemValue)) {
          const newSelectedItems = [...selectedItems, selectedItemValue];
          setSelectedItems(newSelectedItems);
          onChange?.(newSelectedItems);
          onSelect?.(newSelectedItems);
        }
        setInputValue('');
        setIsOpen(false);
      },
      [selectedItems, onChange, onSelect]
    );

    const handleRemoveItem = useCallback(
      (item: string) => {
        const newSelectedItems = selectedItems.filter((i) => i !== item);
        setSelectedItems(newSelectedItems);
        onChange?.(newSelectedItems);
      },
      [selectedItems, onChange]
    );

    const handleClear = useCallback(() => {
      setSelectedItems([]);
      onChange?.([]);
      setInputValue('');
      setIsOpen(false);
    }, [onChange]);

    useEffect(() => {
      if (debouncedInputValue) {
        const matchedOptions = matchFn
          ? options.filter((option) => matchFn(option, debouncedInputValue))
          : matchSuggestion(options, debouncedInputValue);
        setFilteredOptions(matchedOptions);
      } else {
        setFilteredOptions(options);
      }
    }, [debouncedInputValue, options, matchFn]);

    // Tự động điều chỉnh chiều cao của input
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.style.height = 'auto';
        inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
      }
    }, [inputValue, selectedItems]);

    return (
      <ThemeProvider theme={theme}>
        <StyledComboBox
          className={className}
          style={style}
          ref={ref}
          role={role}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedby}
          aria-invalid={ariaInvalid}
          aria-required={ariaRequired}
          aria-disabled={ariaDisabled}
          tabIndex={tabIndex}
          data-testid={testId}
        >
          <StyledInputContainer>
            {selectedItems.map((item) => (
              <StyledTag key={item}>
                {item}
                <StyledTagRemoveButton onClick={() => handleRemoveItem(item)}>
                  &times;
                </StyledTagRemoveButton>
              </StyledTag>
            ))}
            <StyledInput
              ref={inputRef}
              value={inputValue}
              onChange={handleInputChange}
              onFocus={() => setIsOpen(true)}
              onBlur={() => setTimeout(() => setIsOpen(false), 200)}
              placeholder={selectedItems.length === 0 ? placeholder : ''}
              rows={1} // Số dòng tối thiểu
            />
          </StyledInputContainer>
          {showClearButton && selectedItems.length > 0 && (
            <StyledClearButton onClick={handleClear} aria-label="Clear input">
              &times;
            </StyledClearButton>
          )}
          {isOpen && (
            <StyledList>
              {loading ? (
                <StyledLoadingIndicator>Loading...</StyledLoadingIndicator>
              ) : error ? (
                <StyledErrorMessage>{error}</StyledErrorMessage>
              ) : filteredOptions.length === 0 ? (
                <StyledListItem disabled>{noResultsMessage}</StyledListItem>
              ) : (
                filteredOptions.map((option, index) => {
                  const isSelected = selectedItems.includes(
                    typeof option === 'string' ? option : option.value
                  );
                  return (
                    <StyledListItem
                      key={index}
                      onClick={() => !isSelected && handleSelect(option)}
                      disabled={isSelected}
                    >
                      {renderItem
                        ? renderItem(option)
                        : typeof option === 'string'
                          ? option
                          : option.label}
                    </StyledListItem>
                  );
                })
              )}
            </StyledList>
          )}
        </StyledComboBox>
      </ThemeProvider>
    );
  }
);

ComboBox.displayName = 'ComboBox';
