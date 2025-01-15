import { CSSProperties, ReactNode } from 'react';

export type ProgressType = 'linear' | 'circular';
export type ProgressSize = 'small' | 'medium' | 'large' | number;
export type LabelPosition = 'inside' | 'outside' | 'top' | 'bottom';
export type OverlayBlur = 'none' | 'small' | 'medium' | 'large';

export interface ProgressIndicatorProps {
  type?: ProgressType;
  value?: number;
  size?: ProgressSize;
  color?: string;
  thickness?: number;
  animation?: 'smooth' | 'none';
  animationDuration?: number;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
  showLabel?: boolean;
  labelPosition?: LabelPosition;
  labelStyle?: CSSProperties;
  isIndeterminate?: boolean;
  testId?: string;
  overlay?: boolean;
  overlayColor?: string;
  overlayBlur?: OverlayBlur;
  cancelButton?: boolean;
  onCancel?: () => void;
  zIndex?: number;
  maxWidth?: string | number;
  maxHeight?: string | number;
}
