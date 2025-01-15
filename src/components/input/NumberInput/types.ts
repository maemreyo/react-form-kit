import { CSSProperties, ReactNode } from 'react';

export interface NumberInputProps {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  step?: number;
  min?: number;
  max?: number;
  format?: 'number' | 'currency' | 'percentage';
  locale?: string;
  currency?: string;
  decimalSeparator?: string;
  thousandSeparator?: string;
  allowNegative?: boolean;
  precision?: number;
  clampValue?: boolean;
  showButtons?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  ariaDescribedby?: string;
  ariaInvalid?: boolean;
  ariaRequired?: boolean;
  role?: string;
  tabIndex?: number;
  testId?: string;
  pattern?: string;
  conditionalValidation?: (value: number) => boolean;
  slider?: boolean;
  tooltip?: ReactNode;
  touchGestures?: boolean;
  stateManager?: string;
  securityLevel?: 'standard' | 'sensitive';
}
