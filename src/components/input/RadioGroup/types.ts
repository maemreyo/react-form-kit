import { CSSProperties, ReactNode } from 'react';

export type RadioOption = {
  label: ReactNode;
  value: string;
  disabled?: boolean;
};

export type OrientationType = 'vertical' | 'horizontal';
export type LabelPositionType = 'left' | 'right' | 'top' | 'bottom';
export type SpacingType = 'sm' | 'md' | 'lg';

export interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  orientation?: OrientationType;
  disabled?: boolean;
  error?: string;
  spacing?: SpacingType;
  labelPosition?: LabelPositionType;
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
