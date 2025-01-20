import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import { Option, OptionGroup } from './types';

export const useSearch = (
  options: Option[] | OptionGroup[],
  searchTerm: string,
  debounceTime: number = 300
) => {
  const [filteredOptions, setFilteredOptions] = useState(options);

  const filterOptions = useCallback(
    (options: Option[] | OptionGroup[], term: string) => {
      if (!term) return options;

      const isOptionGroup = (item: any): item is OptionGroup =>
        'options' in item;

      return options
        .map((item) => {
          if (isOptionGroup(item)) {
            return {
              ...item,
              options: item.options.filter((opt) =>
                opt.label.toLowerCase().includes(term.toLowerCase())
              ),
            };
          }
          return item;
        })
        .filter((item) => {
          if (isOptionGroup(item)) {
            return item.options.length > 0;
          }
          return (item as Option).label
            .toLowerCase()
            .includes(term.toLowerCase());
        });
    },
    []
  );

  const debouncedFilter = useCallback(
    debounce((term: string) => {
      const filtered = filterOptions(options, term);
      setFilteredOptions(filtered as any);
    }, debounceTime),
    [options, filterOptions, debounceTime]
  );

  useEffect(() => {
    debouncedFilter(searchTerm);
    return () => debouncedFilter.cancel();
  }, [searchTerm, debouncedFilter]);

  return filteredOptions;
};
