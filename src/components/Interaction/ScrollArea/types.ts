import { CSSProperties, ReactNode } from 'react';

export interface ScrollAreaProps {
  smoothScrolling?: boolean;
  scrollbarStyle?: CSSProperties;
  overflowX?: 'auto' | 'scroll' | 'hidden';
  overflowY?: 'auto' | 'scroll' | 'hidden';
  getScrollPosition?: () => { x: number; y: number };
  setScrollPosition?: (position: { x: number; y: number }) => void;
  scrollAnimationDuration?: number;
  scrollAnimationEasing?: string;
  handleClickOutside?: () => void;
  focusTrap?: boolean;
  zIndex?: number;
  children: ReactNode;
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
