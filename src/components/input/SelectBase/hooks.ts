import { useState, useCallback, useEffect } from 'react';
import { SelectOption, SelectOptionGroup } from './types';
import debounce from 'lodash/debounce';

export const useSearch = (
  options: SelectOption[] | SelectOptionGroup[],
  debounceTime: number = 300
) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      const filtered = options
        .map((item) => {
          if ('options' in item) {
            return {
              ...item,
              options: item.options.filter((option) =>
                option.label.toLowerCase().includes(term.toLowerCase())
              ),
            };
          }
          return item;
        })
        .filter((item) => {
          if ('options' in item) {
            return item.options.length > 0;
          }
          return (item as SelectOption).label
            .toLowerCase()
            .includes(term.toLowerCase());
        });

      // @ts-ignore
      setFilteredOptions(filtered);
    }, debounceTime),
    [options]
  );

  useEffect(() => {
    debouncedSearch(searchTerm);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, debouncedSearch]);

  return {
    searchTerm,
    setSearchTerm,
    filteredOptions,
  };
};

export const useKeyboardNavigation = (
  optionsLength: number,
  isOpen: boolean,
  onSelect: (index: number) => void,
  closeDropdown: () => void
) => {
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setHighlightedIndex((prev) =>
            prev < optionsLength - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case 'Enter':
          event.preventDefault();
          if (highlightedIndex !== -1) {
            onSelect(highlightedIndex);
          }
          break;
        case 'Escape':
          event.preventDefault();
          closeDropdown();
          break;
      }
    },
    [isOpen, optionsLength, highlightedIndex, onSelect, closeDropdown]
  );

  useEffect(() => {
    if (isOpen) {
      setHighlightedIndex(-1);
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return {
    highlightedIndex,
    setHighlightedIndex,
  };
};
