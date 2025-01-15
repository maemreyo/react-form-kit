import { CSSProperties, ReactNode } from 'react';

export type HelperTextType = 'info' | 'warning' | 'error' | 'success';
export type HelperTextPosition = 'below' | 'above' | 'side';
export type HelperTextAnimation = 'fade' | 'slide' | 'none';

export interface InputHelperTextProps {
  text: ReactNode;
  show?: boolean;
  type?: HelperTextType;
  position?: HelperTextPosition;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  icon?: ReactNode;
  animation?: HelperTextAnimation;
  onClick?: () => void;
  testId?: string;
  inputId?: string;
  maxLength?: number;
  truncate?: boolean;
  link?: string;
  linkText?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
}
