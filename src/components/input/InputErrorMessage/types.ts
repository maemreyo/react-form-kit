import { CSSProperties, ReactNode } from 'react';

export type ErrorType = 'error' | 'warning' | 'info';
export type ErrorPosition = 'below' | 'side' | 'inside';
export type AnimationType = 'fade' | 'slide' | 'none';

export interface InputErrorMessageProps {
  message: string;
  show?: boolean;
  type?: ErrorType;
  position?: ErrorPosition;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  icon?: ReactNode;
  animation?: AnimationType;
  onClick?: () => void;
  testId?: string;
  inputId?: string;
  maxLength?: number;
  truncate?: boolean;
  link?: string;
  linkText?: string;
}
