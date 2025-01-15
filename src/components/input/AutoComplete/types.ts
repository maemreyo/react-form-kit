import { CSSProperties, ReactNode } from 'react';

export interface Suggestion {
  id: string | number;
  value: string;
  [key: string]: any;
}

export interface AutoCompleteProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSelect?: (suggestion: Suggestion) => void;
  suggestions?: Suggestion[];
  matchFn?: (input: string, suggestion: Suggestion) => boolean;
  debounceTime?: number;
  loading?: boolean;
  error?: string;
  noResultsMessage?: string;
  recentSelections?: Suggestion[];
  showClearButton?: boolean;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  ariaDescribedby?: string;
  ariaInvalid?: boolean;
  ariaRequired?: boolean;
  ariaDisabled?: boolean;
  role?: string;
  tabIndex?: number;
  testId?: string;
}
