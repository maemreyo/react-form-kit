import { CSSProperties, ReactNode } from 'react';

export interface Section {
  title: string;
  content: ReactNode;
  id: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export interface FormAccordionProps {
  sections: Section[];
  activeSection?: string;
  multipleExpand?: boolean;
  breakpoints?: Record<string, any>;
  gap?: string;
  alignment?: 'left' | 'center' | 'right';
  icons?: {
    expand?: ReactNode;
    collapse?: ReactNode;
  };
  animation?: boolean;
  className?: string;
  style?: CSSProperties;
  onChange?: (sectionId: string) => void;
}
