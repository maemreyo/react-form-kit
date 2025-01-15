import React, { forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import {
  StyledSpinnerWrapper,
  StyledSpinner,
  StyledMessage,
  StyledOverlay,
} from './styled';
import { LoadingSpinnerProps } from './types';
import { getSizeValue, getSpeedValue, getBlurValue } from './utils';

export const LoadingSpinner = forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  (
    {
      type = 'circular',
      size = 'medium',
      color = '#000000',
      speed = 'normal',
      thickness = 2,
      isVisible = true,
      ariaLabel = 'Loading',
      className,
      style,
      testId,
      overlay = false,
      overlayColor = 'rgba(255, 255, 255, 0.7)',
      overlayBlur = 'none',
      message,
      messagePosition = 'below',
      messageStyle,
      reverse = false,
      center = true,
    },
    ref
  ) => {
    if (!isVisible) return null;

    const sizeValue = getSizeValue(size);
    const speedValue = getSpeedValue(speed);
    const blurValue = getBlurValue(overlayBlur);

    const spinner = (
      <StyledSpinnerWrapper
        ref={ref}
        className={className}
        style={style}
        $center={center && !overlay}
        data-testid={testId}
      >
        {messagePosition === 'above' && message && (
          <StyledMessage
            $position={messagePosition}
            $size={sizeValue}
            style={messageStyle}
          >
            {message}
          </StyledMessage>
        )}

        <StyledSpinner
          $type={type}
          $size={sizeValue}
          $color={color}
          $thickness={thickness}
          $speed={speedValue}
          $reverse={reverse}
          role="progressbar"
          aria-label={ariaLabel}
        />

        {messagePosition === 'below' && message && (
          <StyledMessage
            $position={messagePosition}
            $size={sizeValue}
            style={messageStyle}
          >
            {message}
          </StyledMessage>
        )}
      </StyledSpinnerWrapper>
    );

    if (overlay) {
      return (
        <ThemeProvider theme={theme}>
          <StyledOverlay $overlayColor={overlayColor} $overlayBlur={blurValue}>
            {spinner}
          </StyledOverlay>
        </ThemeProvider>
      );
    }

    return <ThemeProvider theme={theme}>{spinner}</ThemeProvider>;
  }
);

LoadingSpinner.displayName = 'LoadingSpinner';
