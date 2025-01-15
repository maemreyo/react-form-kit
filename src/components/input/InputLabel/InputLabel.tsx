import React, { forwardRef, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import {
  StyledLabel,
  StyledLabelContainer,
  StyledRequired,
  StyledOptional,
  StyledTooltipWrapper,
} from './styled';
import { InputLabelProps } from './types';
import { Tooltip } from '../../interaction/Tooltip';

export const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>(
  (
    {
      htmlFor,
      label,
      required = false,
      optional = false,
      disabled = false,
      position = 'top',
      tooltip = null,
      tooltipPlacement = 'top',
      className,
      style,
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
      color,
      marginBottom,
      marginRight,
      ariaLabel,
      ariaDisabled,
      testId,
    },
    ref
  ) => {
    const renderTooltip = useCallback(() => {
      if (!tooltip) return null;

      return (
        <StyledTooltipWrapper>
          <Tooltip title={tooltip} placement={tooltipPlacement}>
            <span>{label}</span>
          </Tooltip>
        </StyledTooltipWrapper>
      );
    }, [tooltip, tooltipPlacement, label]);

    if (!htmlFor) {
      console.error('InputLabel requires htmlFor prop');
      return null;
    }

    return (
      <ThemeProvider theme={theme}>
        <StyledLabelContainer
          className={className}
          style={style}
          $position={position}
          data-testid={testId}
        >
          <StyledLabel
            htmlFor={htmlFor}
            $disabled={disabled}
            $position={position}
            ref={ref}
            role="label"
            aria-label={ariaLabel}
            aria-disabled={ariaDisabled || disabled}
            $fontFamily={fontFamily}
            $fontSize={fontSize}
            $fontWeight={fontWeight}
            $lineHeight={lineHeight}
            $color={color}
            $marginBottom={marginBottom}
            $marginRight={marginRight}
          >
            {tooltip ? renderTooltip() : label}
            {required && <StyledRequired>*</StyledRequired>}
            {optional && !required && (
              <StyledOptional>(optional)</StyledOptional>
            )}
          </StyledLabel>
        </StyledLabelContainer>
      </ThemeProvider>
    );
  }
);

InputLabel.displayName = 'InputLabel';
