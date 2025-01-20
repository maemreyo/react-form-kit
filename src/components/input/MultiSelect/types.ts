import { CSSProperties, ReactNode } from 'react';

export interface Option {
  label: string;
  value: string;
}

export interface OptionGroup {
  label: string;
  options: Option[];
}

export interface MultiSelectProps {
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  options: Option[] | OptionGroup[];
  searchable?: boolean;
  debounceTime?: number;
  renderOption?: (option: Option) => ReactNode;
  groupOptions?: OptionGroup[];
  clearable?: boolean;
  placeholder?: string;
  loading?: boolean;
  error?: string;
  virtualScroll?: boolean;
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
