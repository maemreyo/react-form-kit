import React, { forwardRef, useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import { MultiSelectProps, Option, OptionGroup } from './types';
import { useSearch } from './hooks';
import * as S from './styled';

export const MultiSelect = forwardRef<HTMLDivElement, MultiSelectProps>(
  (
    {
      value,
      defaultValue = [],
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
      ariaLabel = 'MultiSelect',
      ariaDescribedby,
      ariaInvalid,
      ariaRequired,
      ariaDisabled,
      role = 'listbox',
      tabIndex = 0,
      testId,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedValues, setSelectedValues] = useState<string[]>(
      value || defaultValue
    );

    const filteredOptions = useSearch(options, searchTerm, debounceTime);

    const handleSelect = useCallback(
      (optionValue: string) => {
        const newValues = selectedValues.includes(optionValue)
          ? selectedValues.filter((v) => v !== optionValue)
          : [...selectedValues, optionValue];

        setSelectedValues(newValues);
        onChange?.(newValues);
      },
      [selectedValues, onChange]
    );

    const handleClear = useCallback(() => {
      setSelectedValues([]);
      onChange?.([]);
    }, [onChange]);

    const isOptionGroup = (item: any): item is OptionGroup => 'options' in item;

    const renderOptionItem = (option: Option, isSelected: boolean) => {
      if (renderOption) {
        return renderOption(option);
      }

      return (
        <S.OptionItem
          key={option.value}
          $isSelected={isSelected}
          onClick={() => handleSelect(option.value)}
          role="option"
          aria-selected={isSelected}
        >
          {option.label}
        </S.OptionItem>
      );
    };

    return (
      <ThemeProvider theme={theme}>
        <S.Container
          ref={ref}
          className={className}
          style={style}
          data-testid={testId}
        >
          <S.SelectButton
            onClick={() => setIsOpen(!isOpen)}
            $hasError={!!error}
            aria-label={ariaLabel}
            aria-describedby={ariaDescribedby}
            aria-invalid={ariaInvalid}
            aria-required={ariaRequired}
            aria-disabled={ariaDisabled}
            tabIndex={tabIndex}
          >
            <S.SelectedChips>
              {selectedValues.map((value) => {
                const option = (options as Option[]).find(
                  (opt) => opt.value === value
                );
                if (!option) return null;

                return (
                  <S.Chip key={value}>
                    {option.label}
                    <S.ChipRemove
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelect(value);
                      }}
                    >
                      ×
                    </S.ChipRemove>
                  </S.Chip>
                );
              })}
              {selectedValues.length === 0 && placeholder}
            </S.SelectedChips>
          </S.SelectButton>

          <S.Dropdown $isOpen={isOpen}>
            {searchable && (
              <S.SearchInput
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                onClick={(e) => e.stopPropagation()}
              />
            )}

            <S.OptionsList role={role}>
              {filteredOptions.map((item) => {
                if (isOptionGroup(item)) {
                  return (
                    <React.Fragment key={item.label}>
                      <S.GroupLabel>{item.label}</S.GroupLabel>
                      {item.options.map((option) =>
                        renderOptionItem(
                          option,
                          selectedValues.includes(option.value)
                        )
                      )}
                    </React.Fragment>
                  );
                }
                return renderOptionItem(
                  item as Option,
                  selectedValues.includes((item as Option).value)
                );
              })}
            </S.OptionsList>
          </S.Dropdown>
        </S.Container>
      </ThemeProvider>
    );
  }
);

MultiSelect.displayName = 'MultiSelect';
