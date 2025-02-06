// types.ts
import { CSSProperties, ReactNode, FocusEvent, KeyboardEvent } from 'react';

export interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SortableTagPickerProps {
  value?: string[];
  defaultValue?: string[];
  options: Option[];
  onChange?: (values: string[]) => void;
  onOrderChange?: (newOrder: string[]) => void;
  onSearch?: (searchText: string) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
  error?: string;
  maxItems?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
  name?: string;
  testId?: string;
  inputTestId?: string;
  listTestId?: string;
  renderItem?: (item: Option) => ReactNode;
  renderPill?: (item: Option) => ReactNode;
  filterOption?: (input: string, option: Option) => boolean;
  debounceTime?: number;
  sortableProps?: Record<string, unknown>;
  ariaLabel?: string;
  ariaDescribedby?: string;
  ariaLabelledby?: string;
  ariaRequired?: boolean;
  ariaInvalid?: boolean;
  ariaExpanded?: boolean;
  role?: string;
  listRole?: string;
  itemRole?: string;
  showDraggableList?: boolean;
  renderInputTags?: (
    tags: Option[],
    onRemove: (value: string) => void
  ) => ReactNode;
  disabledItemsPosition?: 'top' | 'bottom' | 'none';
  draggableListDirection?: 'horizontal' | 'vertical';
  searchOnMount?: boolean;
}

export interface StyledContainerProps {
  $disabled?: boolean;
  $hasError?: boolean;
}

export interface StyledInputWrapperProps {
  $isFocused?: boolean;
  $disabled?: boolean;
  $hasError?: boolean;
}

export interface StyledTagItemProps {
  $isDragging?: boolean;
  $disabled?: boolean;
}

export interface StyledTagListProps {
  $isDragging?: boolean;
  $direction?: 'horizontal' | 'vertical';
}
