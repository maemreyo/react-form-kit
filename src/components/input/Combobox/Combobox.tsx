import React, { forwardRef, useState, useCallback, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import {
  StyledComboBox,
  StyledInput,
  StyledList,
  StyledListItem,
  StyledLoadingIndicator,
  StyledErrorMessage,
  StyledClearButton,
} from './styled';
import { ComboBoxProps } from './types';
import { useDebounce } from './hooks';
import { matchSuggestion } from './utils';

export const ComboBox = forwardRef<HTMLDivElement, ComboBoxProps>(
  (
    {
      value = '',
      defaultValue = '',
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
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(value || defaultValue);
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [isOpen, setIsOpen] = useState(false);

    const debouncedInputValue = useDebounce(inputValue, debounceTime);

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        onChange?.(e.target.value);
      },
      [onChange]
    );

    const handleSelect = useCallback(
      (selectedValue: string) => {
        setInputValue(selectedValue);
        onSelect?.(selectedValue);
        setIsOpen(false);
      },
      [onSelect]
    );

    const handleClear = useCallback(() => {
      setInputValue('');
      onChange?.('');
      setIsOpen(false);
    }, [onChange]);

    useEffect(() => {
      if (isOpen) {
        if (inputValue === '') {
          setFilteredOptions(options);
        } else {
          const matchedOptions = matchFn
            ? options.filter((option) => matchFn(option, inputValue))
            : matchSuggestion(options, inputValue);
          setFilteredOptions(matchedOptions);
        }
      }
    }, [inputValue, options, matchFn, isOpen]);

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
          <StyledInput
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 200)}
            aria-autocomplete="list"
            aria-expanded={isOpen}
          />
          {showClearButton && inputValue && (
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
                filteredOptions.map((option, index) => (
                  <StyledListItem
                    key={index}
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </StyledListItem>
                ))
              )}
            </StyledList>
          )}
        </StyledComboBox>
      </ThemeProvider>
    );
  }
);

ComboBox.displayName = 'ComboBox';
