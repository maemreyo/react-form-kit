import React, { forwardRef, useState, useCallback, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import {
  StyledSelectContainer,
  StyledSelect,
  StyledDropdown,
  StyledSearchInput,
  StyledOption,
  StyledGroupLabel,
  StyledPlaceholder,
  StyledClearButton,
  StyledLoading,
  StyledError,
} from './styled';
import { SelectBaseProps, SelectOption, SelectOptionGroup } from './types';
import { useSearch, useKeyboardNavigation } from './hooks';

export const SelectBase = forwardRef<HTMLDivElement, SelectBaseProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      options,
      searchable = true,
      debounceTime = 300,
      renderOption,
      clearable = true,
      placeholder = 'Select...',
      loading = false,
      error = '',
      virtualScroll = true,
      className,
      style,
      ariaLabel,
      ariaDescribedby,
      ariaInvalid,
      ariaRequired,
      ariaDisabled,
      role,
      tabIndex,
      testId,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | string[]>(
      value || defaultValue || ''
    );
    const containerRef = useRef<HTMLDivElement>(null);

    const { searchTerm, setSearchTerm, filteredOptions } = useSearch(
      options,
      debounceTime
    );

    const selectableOptions = filteredOptions.reduce((acc, item) => {
      if ('options' in item) {
        return acc.concat(item.options);
      } else {
        return acc.concat([item]);
      }
    }, [] as SelectOption[]);

    const getFlatIndex = (
      options: SelectOption[] | SelectOptionGroup[],
      groupIndex: number,
      optionIndex: number
    ): number => {
      let flatIndex = 0;
      for (let i = 0; i < groupIndex; i++) {
        const item = options[i];
        if ('options' in item) {
          flatIndex += item.options.length;
        } else {
          flatIndex += 1;
        }
      }
      return flatIndex + optionIndex;
    };

    const handleSelect = useCallback(
      (option: SelectOption) => {
        setSelectedValue(option.value);
        onChange?.(option.value);
        setIsOpen(false);
      },
      [onChange]
    );

    const handleClear = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedValue('');
        onChange?.('');
      },
      [onChange]
    );

    const selectableOptionsCount = selectableOptions.length;
    const { highlightedIndex, setHighlightedIndex } = useKeyboardNavigation(
      selectableOptionsCount,
      isOpen,
      (index) => {
        const option = selectableOptions[index];
        if (option) handleSelect(option);
      },
      () => setIsOpen(false)
    );

    const renderSelectedValue = () => {
      if (!selectedValue) {
        return <StyledPlaceholder>{placeholder}</StyledPlaceholder>;
      }

      let selectedOption: SelectOption | undefined;

      options.forEach((item) => {
        if ('options' in item) {
          const found = item.options.find((opt) => opt.value === selectedValue);
          if (found) {
            selectedOption = found;
          }
        } else if ((item as SelectOption).value === selectedValue) {
          selectedOption = item as SelectOption;
        }
      });

      return selectedOption?.label || '';
    };

    return (
      <ThemeProvider theme={theme}>
        <StyledSelectContainer
          ref={ref}
          className={className}
          style={style}
          $error={!!error}
          $disabled={ariaDisabled}
          data-testid={testId}
        >
          <StyledSelect
            onClick={() => setIsOpen(!isOpen)}
            tabIndex={tabIndex || 0}
            role={role || 'combobox'}
            aria-label={ariaLabel}
            aria-describedby={ariaDescribedby}
            aria-invalid={ariaInvalid}
            aria-required={ariaRequired}
            aria-expanded={isOpen}
            ref={containerRef}
          >
            {renderSelectedValue()}
            {clearable && selectedValue && (
              <StyledClearButton onClick={handleClear}>×</StyledClearButton>
            )}
          </StyledSelect>

          <StyledDropdown $isOpen={isOpen}>
            {searchable && (
              <StyledSearchInput
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                onClick={(e) => e.stopPropagation()}
              />
            )}

            {loading ? (
              <StyledLoading>Loading...</StyledLoading>
            ) : (
              filteredOptions.map((item, index) => {
                if ('options' in item) {
                  return (
                    <React.Fragment key={item.label}>
                      <StyledGroupLabel>{item.label}</StyledGroupLabel>
                      {item.options.map((option, optionIndex) => {
                        const flatIndex = getFlatIndex(
                          filteredOptions,
                          index,
                          optionIndex
                        );
                        return (
                          <StyledOption
                            key={option.value}
                            onClick={() => handleSelect(option)}
                            $isSelected={option.value === selectedValue}
                            $isHighlighted={flatIndex === highlightedIndex}
                            onMouseEnter={() => setHighlightedIndex(flatIndex)}
                          >
                            {renderOption ? renderOption(option) : option.label}
                          </StyledOption>
                        );
                      })}
                    </React.Fragment>
                  );
                }

                const option = item as SelectOption;
                const flatIndex = getFlatIndex(filteredOptions, index, 0);
                return (
                  <StyledOption
                    key={option.value}
                    onClick={() => handleSelect(option)}
                    $isSelected={option.value === selectedValue}
                    $isHighlighted={flatIndex === highlightedIndex}
                    onMouseEnter={() => setHighlightedIndex(flatIndex)}
                  >
                    {renderOption ? renderOption(option) : option.label}
                  </StyledOption>
                );
              })
            )}
          </StyledDropdown>

          {error && <StyledError>{error}</StyledError>}
        </StyledSelectContainer>
      </ThemeProvider>
    );
  }
);

SelectBase.displayName = 'SelectBase';
