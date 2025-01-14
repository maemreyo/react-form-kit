import { CSSProperties, ReactNode } from 'react';

export interface ComboBoxProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSelect?: (value: string) => void;
  options?: string[];
  matchFn?: (option: string, inputValue: string) => boolean;
  debounceTime?: number;
  loading?: boolean;
  error?: string;
  noResultsMessage?: string;
  recentSelections?: string[];
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
