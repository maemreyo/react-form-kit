import { CSSProperties, ReactNode } from 'react';

export type TabItem = {
  key: string;
  label: ReactNode;
  content: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
};

export type TabPosition = 'top' | 'bottom' | 'left' | 'right';
export type TabVariant = 'underline' | 'line' | 'buttons';

export interface FormTabsProps {
  tabs: TabItem[];
  activeTab?: string | number;
  onChange?: (key: string) => void;
  breakpoints?: {
    [key: string]: {
      columns?: number;
      position?: TabPosition;
    };
  };
  gap?: string;
  columns?: number;
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  justifyContent?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around';
  variant?: TabVariant;
  position?: TabPosition;
  lazyLoad?: boolean;
  animated?: boolean;
  className?: string;
  style?: CSSProperties;
}

export interface TabPanelProps extends TabItem {
  active: boolean;
  animated?: boolean;
}

export interface TabListProps {
  items: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
  position: TabPosition;
  variant: TabVariant;
}

export interface StyledTabsProps {
  $position: TabPosition;
  $variant: TabVariant;
  $columns: number;
  $gap: string;
  $alignItems: string;
  $justifyContent: string;
}
