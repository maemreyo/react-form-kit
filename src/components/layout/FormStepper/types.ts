import { ReactNode, CSSProperties } from 'react';

export interface StepItem {
  title: string;
  content: ReactNode;
  icon?: ReactNode;
  completed?: boolean;
  disabled?: boolean;
}

export interface FormStepperProps {
  steps: StepItem[];
  activeStep?: number;
  linear?: boolean;
  responsive?: boolean;
  icons?: {
    completed?: ReactNode;
    active?: ReactNode;
    upcoming?: ReactNode;
  };
  labels?: boolean;
  vertical?: boolean;
  editable?: boolean;
  animation?: boolean;
  onChange?: (step: number) => void;
  className?: string;
  style?: CSSProperties;
}
