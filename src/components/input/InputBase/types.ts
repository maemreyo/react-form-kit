import {
  CSSProperties,
  ReactNode,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
} from 'react';

export interface ValidationRule {
  test: (value: string) => boolean | Promise<boolean>;
  message: string;
}

export interface InputBaseProps {
  value?: string;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  type?: string;
  name?: string;
  id?: string;
  autoComplete?: string;
  maxLength?: number;
  minLength?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: CSSProperties;
  required?: boolean;
  pattern?: string;
  validationRules?: ValidationRule[];
  errorMessage?: string;
  successMessage?: string;
  warningMessage?: string;
  validationTiming?: 'onBlur' | 'onChange';
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  clearButton?: boolean;
  focusRing?: boolean;
  status?: 'default' | 'error' | 'success' | 'warning' | 'loading';
  loadingIndicator?: ReactNode;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  'aria-required'?: boolean;
  'aria-disabled'?: boolean;
  role?: string;
  tabIndex?: number;
  debounce?: number;
}
