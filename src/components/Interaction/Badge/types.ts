import { CSSProperties, ReactNode } from 'react';

export type BadgeType = 'default' | 'primary' | 'success' | 'warning' | 'error';
export type BadgeSize = 'small' | 'medium' | 'large';
export type BadgeShape = 'rounded' | 'square' | 'circle';
export type BadgePosition =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left';
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export type BadgeAnimation = 'fade' | 'scale' | 'none';

export interface BadgeProps {
  content?: string | number | ReactNode;
  type?: BadgeType;
  size?: BadgeSize;
  shape?: BadgeShape;
  color?: string;
  backgroundColor?: string;
  position?: BadgePosition;
  offsetX?: number;
  offsetY?: number;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  isVisible?: boolean;
  isInteractive?: boolean;
  onClick?: () => void;
  maxCount?: number;
  showZero?: boolean;
  testId?: string;
  tooltip?: string;
  tooltipPosition?: TooltipPosition;
  animation?: BadgeAnimation;
  animationDuration?: number;
  disablePortal?: boolean;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
  role?: string;
  zIndex?: number;
}
