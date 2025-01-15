import { useState, useEffect, useCallback, useMemo } from 'react';
import debounce from 'lodash/debounce';
import { Suggestion } from './types';

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useFilteredSuggestions = (
  input: string,
  suggestions: Suggestion[],
  matchFn?: (input: string, suggestion: Suggestion) => boolean
) => {
  return useMemo(() => {
    if (!input) return suggestions;

    const defaultMatchFn = (input: string, suggestion: Suggestion) =>
      suggestion.value.toLowerCase().includes(input.toLowerCase());

    const matcher = matchFn || defaultMatchFn;
    return suggestions.filter((suggestion) => matcher(input, suggestion));
  }, [input, suggestions, matchFn]);
};
