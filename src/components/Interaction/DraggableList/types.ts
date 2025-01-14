import { CSSProperties, ReactNode } from 'react';

export interface DraggableListProps {
  items: Array<{ id: string; content: ReactNode }>;
  onReorder: (items: Array<{ id: string; content: ReactNode }>) => void;
  renderItem?: (item: { id: string; content: ReactNode }) => ReactNode;
  dragHandle?: boolean;
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
