import { CSSProperties } from 'react';

export type SpinnerType = 'circular' | 'dots' | 'bars';
export type SpinnerSize = 'small' | 'medium' | 'large' | number;
export type SpinnerSpeed = 'slow' | 'normal' | 'fast' | number;
export type MessagePosition = 'below' | 'above' | 'side';
export type OverlayBlur = 'none' | 'small' | 'medium' | 'large';

export interface LoadingSpinnerProps {
  type?: SpinnerType;
  size?: SpinnerSize;
  color?: string;
  speed?: SpinnerSpeed;
  thickness?: number;
  isVisible?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
  testId?: string;
  overlay?: boolean;
  overlayColor?: string;
  overlayBlur?: OverlayBlur;
  message?: string;
  messagePosition?: MessagePosition;
  messageStyle?: CSSProperties;
  reverse?: boolean;
  center?: boolean;
}
