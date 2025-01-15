import { CSSProperties, ReactNode } from 'react';

export type ToggleSwitchSize = 'small' | 'medium' | 'large';
export type LabelPosition = 'left' | 'right';
export type AnimationType = 'smooth' | 'none';

export interface ToggleSwitchProps {
  isOn?: boolean;
  onChange?: (checked: boolean) => void;
  size?: ToggleSwitchSize;
  onColor?: string;
  offColor?: string;
  thumbColor?: string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  onLabel?: ReactNode;
  offLabel?: ReactNode;
  labelPosition?: LabelPosition;
  animation?: AnimationType;
  animationDuration?: number;
  testId?: string;
  focusable?: boolean;
  tabIndex?: number;
  id?: string;
  name?: string;
}
