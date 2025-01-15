import { CSSProperties, ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

export type ListMode = 'stacked' | 'comma' | 'badges' | 'default';
export type SortDirection = 'asc' | 'desc';
export type AnimationType = 'fade' | 'slide' | 'scale';
export type Alignment = 'start' | 'center' | 'end';
export type Spacing = number | 'sm' | 'md' | 'lg';
export type Direction = 'horizontal' | 'vertical';

export interface ListBaseProps<T = any> {
  items: T[];
  mode?: ListMode;
  truncateAt?: number;
  overflowIndicator?: string | ReactNode;
  itemRenderer?: (item: T, index: number) => ReactNode;
  listRenderer?: (renderedItems: ReactNode[]) => ReactNode;
  className?: string;
  style?: CSSProperties;

  // Layout & Appearance
  spacing?: Spacing;
  direction?: Direction;
  alignment?: Alignment;
  maxHeight?: number | string;
  maxWidth?: number | string;
  responsive?: boolean;
  wrapItems?: boolean;

  // Interaction
  selectable?: boolean;
  multiSelect?: boolean;
  selectedItems?: T[];
  onSelect?: (items: T[]) => void;
  draggable?: boolean;
  onDragEnd?: (result: any) => void;
  hoverable?: boolean;
  clickable?: boolean;

  // Data Management
  sortBy?: string | ((a: T, b: T) => number);
  filterBy?: (item: T) => boolean;
  groupBy?: string | ((item: T) => string);
  sortDirection?: SortDirection;
  initialSortField?: string;

  // Accessibility
  ariaLabel?: string;
  ariaDescription?: string;
  keyboardNavigation?: boolean;
  focusable?: boolean;
  tabIndex?: number;

  // Animation
  animated?: boolean;
  animationDuration?: number;
  animationType?: AnimationType;
  exitAnimation?: boolean;

  // Loading & Error States
  loading?: boolean;
  loadingRenderer?: () => ReactNode;
  error?: Error | null;
  errorRenderer?: (error: Error) => ReactNode;
  emptyStateRenderer?: () => ReactNode;

  theme?: DefaultTheme;
}
