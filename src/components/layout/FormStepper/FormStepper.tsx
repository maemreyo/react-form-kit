import React, { useState, useCallback, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import { FormStepperProps } from './types';
import {
  StyledStepper,
  StyledStepContainer,
  StyledStep,
  StyledStepIcon,
  StyledStepLabel,
  StyledStepContent,
  StyledConnector,
  StyledContentWrapper,
} from './styled';

export const FormStepper = ({
  steps,
  activeStep = 0,
  linear = true,
  responsive = true,
  icons,
  labels = true,
  vertical = false,
  editable = false,
  animation = true,
  onChange,
  className,
  style,
}: FormStepperProps) => {
  const [currentStep, setCurrentStep] = useState(activeStep);

  const handleStepClick = useCallback(
    (index: number) => {
      if (!linear || editable || index < currentStep) {
        setCurrentStep(index);
        onChange?.(index);
      }
    },
    [linear, editable, currentStep, onChange]
  );

  const renderStepIcon = useCallback(
    (index: number, completed: boolean) => {
      if (completed && icons?.completed) {
        return icons.completed;
      }
      if (index === currentStep && icons?.active) {
        return icons.active;
      }
      if (icons?.upcoming) {
        return icons.upcoming;
      }
      return index + 1;
    },
    [currentStep, icons]
  );

  const stepElements = useMemo(() => {
    return steps.map((step, index) => {
      const isCompleted = index < currentStep;
      const isActive = index === currentStep;
      const isDisabled = step.disabled || (linear && index > currentStep);

      return (
        <React.Fragment key={index}>
          {index > 0 && (
            <StyledConnector $completed={isCompleted} $vertical={vertical} />
          )}
          <StyledStep
            $active={isActive}
            $completed={isCompleted}
            $disabled={isDisabled}
            $vertical={vertical}
            onClick={() => !isDisabled && handleStepClick(index)}
            role="button"
            tabIndex={isDisabled ? -1 : 0}
            aria-current={isActive ? 'step' : undefined}
            aria-disabled={isDisabled}
          >
            <StyledStepIcon
              $active={isActive}
              $completed={isCompleted}
              $disabled={isDisabled}
            >
              {renderStepIcon(index, isCompleted)}
            </StyledStepIcon>
            {labels && (
              <StyledStepLabel
                $active={isActive}
                $completed={isCompleted}
                $disabled={isDisabled}
              >
                {step.title}
              </StyledStepLabel>
            )}
          </StyledStep>
        </React.Fragment>
      );
    });
  }, [
    steps,
    currentStep,
    linear,
    vertical,
    labels,
    handleStepClick,
    renderStepIcon,
  ]);

  return (
    <ThemeProvider theme={theme}>
      <StyledStepper
        className={className}
        style={style}
        $vertical={vertical}
        $responsive={responsive}
        role="navigation"
        aria-label="Form steps"
      >
        <StyledStepContainer $vertical={vertical}>
          {stepElements}
        </StyledStepContainer>
        <StyledContentWrapper $animation={animation}>
          <StyledStepContent role="tabpanel">
            {steps[currentStep]?.content}
          </StyledStepContent>
        </StyledContentWrapper>
      </StyledStepper>
    </ThemeProvider>
  );
};
