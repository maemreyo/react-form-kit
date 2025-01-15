import React, { forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import {
  ProgressContainer,
  LinearProgressBar,
  CircularProgress,
  ProgressLabel,
  Overlay,
  CancelButton,
} from './styled';
import { ProgressIndicatorProps } from './types';

export const ProgressIndicator = forwardRef<
  HTMLDivElement,
  ProgressIndicatorProps
>(
  (
    {
      type = 'linear',
      value = 0,
      size = 'medium',
      color,
      thickness = 4,
      animation = 'smooth',
      animationDuration = 300,
      ariaLabel = 'Progress',
      className,
      style,
      showLabel = false,
      labelPosition = 'inside',
      labelStyle,
      isIndeterminate = false,
      testId,
      overlay = false,
      overlayColor = 'rgba(255, 255, 255, 0.7)',
      overlayBlur = 'none',
      cancelButton = false,
      onCancel,
      zIndex = 1000,
      maxWidth = '100%',
      maxHeight = 'auto',
    },
    ref
  ) => {
    const normalizedValue = Math.min(Math.max(value, 0), 100);

    const renderProgressBar = () => {
      if (type === 'circular') {
        const radius =
          typeof size === 'number' ? size / 2 - thickness : 24 - thickness;
        const circumference = 2 * Math.PI * radius;
        const progressLength = (normalizedValue / 100) * circumference;

        return (
          <CircularProgress
            $size={size}
            $value={normalizedValue}
            $color={color}
            $thickness={thickness}
            $isIndeterminate={isIndeterminate}
            $animation={animation}
            $animationDuration={animationDuration}
            viewBox="0 0 48 48"
          >
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="none"
              stroke={theme.colors['light-300']}
              strokeWidth={thickness}
            />
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="none"
              stroke={color || theme.colors.primary}
              strokeWidth={thickness}
              strokeDasharray={`${progressLength} ${circumference}`}
              strokeLinecap="round"
            />
          </CircularProgress>
        );
      }

      return (
        <LinearProgressBar
          $value={normalizedValue}
          $color={color}
          $thickness={thickness}
          $isIndeterminate={isIndeterminate}
          $animation={animation}
          $animationDuration={animationDuration}
        />
      );
    };

    return (
      <ThemeProvider theme={theme}>
        {overlay && <Overlay $color={overlayColor} $blur={overlayBlur} />}
        <ProgressContainer
          ref={ref}
          className={className}
          style={style}
          $type={type}
          $size={size}
          $maxWidth={maxWidth}
          $maxHeight={maxHeight}
          $zIndex={zIndex}
          role="progressbar"
          aria-label={ariaLabel}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={isIndeterminate ? undefined : normalizedValue}
          data-testid={testId}
        >
          {showLabel && labelPosition === 'top' && (
            <ProgressLabel
              $position={labelPosition}
              $type={type}
              style={labelStyle}
            >
              {`${normalizedValue}%`}
            </ProgressLabel>
          )}

          {renderProgressBar()}

          {showLabel && labelPosition !== 'top' && (
            <ProgressLabel
              $position={labelPosition}
              $type={type}
              style={labelStyle}
            >
              {`${normalizedValue}%`}
            </ProgressLabel>
          )}

          {cancelButton && onCancel && (
            <CancelButton onClick={onCancel} aria-label="Cancel">
              ✕
            </CancelButton>
          )}
        </ProgressContainer>
      </ThemeProvider>
    );
  }
);

ProgressIndicator.displayName = 'ProgressIndicator';
