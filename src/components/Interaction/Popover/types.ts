import { ReactNode, CSSProperties } from 'react';
import { Placement } from '@popperjs/core';

export type TriggerAction = 'click' | 'hover' | 'focus';
export type AnimationType = 'fade' | 'slide' | 'none';
export type OverlayBlur = 'none' | 'small' | 'medium' | 'large';

export interface PopoverProps {
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  trigger: ReactNode;
  triggerAction?: TriggerAction;
  position?: Placement;
  offsetX?: number;
  offsetY?: number;
  content: ReactNode;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  animation?: AnimationType;
  animationDuration?: number;
  closeOnClickOutside?: boolean;
  closeOnEscape?: boolean;
  arrow?: boolean;
  arrowSize?: number;
  arrowColor?: string;
  overlay?: boolean;
  overlayColor?: string;
  overlayBlur?: OverlayBlur;
  testId?: string;
  zIndex?: number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  scrollable?: boolean;
  focusTrap?: boolean;
  disablePortal?: boolean;
  onPositionChange?: (position: Placement) => void;
  role?: string;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
  closeButton?: boolean;
  closeButtonAriaLabel?: string;
}
