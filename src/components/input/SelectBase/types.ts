import { CSSProperties, ReactNode } from 'react';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectOptionGroup {
  label: string;
  options: SelectOption[];
}

export interface SelectBaseProps {
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  options: SelectOption[] | SelectOptionGroup[];
  searchable?: boolean;
  debounceTime?: number;
  renderOption?: (option: SelectOption) => ReactNode;
  groupOptions?: SelectOptionGroup[];
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

export interface StyledSelectContainerProps {
  $error?: boolean;
  $disabled?: boolean;
}

export interface StyledDropdownProps {
  $isOpen: boolean;
}

export interface StyledOptionProps {
  $isSelected: boolean;
  $isHighlighted: boolean;
}
