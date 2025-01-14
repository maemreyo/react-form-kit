import { CSSProperties, ReactNode } from 'react';
export interface ComboBoxProps {
  value?: string[] | { label: string; value: string }[];
  defaultValue?: string[] | { label: string; value: string }[];
  onChange?: (value: string[] | { label: string; value: string }[]) => void;
  onSelect?: (value: string[] | { label: string; value: string }[]) => void;
  options?: string[] | { label: string; value: string }[];
  matchFn?: (
    option: string | { label: string; value: string },
    inputValue: string
  ) => boolean;
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
  placeholder?: string;
  renderItem?: (item: string | { label: string; value: string }) => ReactNode;
}
