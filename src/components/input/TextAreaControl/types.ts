import { CSSProperties, ChangeEvent, ReactNode } from 'react';

export interface TextAreaControlProps {
  value?: string;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  minHeight?: string | number;
  maxHeight?: string | number;
  showCharacterCount?: boolean;
  maxLength?: number;
  lineWrap?: boolean;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  disabled?: boolean;
  readOnly?: boolean;
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

export interface StyledTextAreaProps {
  $minHeight?: string | number;
  $maxHeight?: string | number;
  $lineWrap?: boolean;
  $resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  $disabled?: boolean;
}

export interface StyledCharacterCountProps {
  $isOverLimit: boolean;
}

export interface StyledContainerProps {
  $disabled?: boolean;
}
