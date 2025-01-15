import React, { forwardRef, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import {
  StyledContainer,
  StyledInput,
  StyledButton,
  StyledButtonGroup,
} from './styled';
import { NumberInputProps } from './types';
import { useNumberInput } from './hooks';
import { formatNumber } from './utils';
import { Tooltip } from '../../interaction/Tooltip';

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      value,
      defaultValue = 0,
      onChange,
      step = 1,
      min,
      max,
      format = 'number',
      locale = 'en-US',
      currency = 'USD',
      decimalSeparator,
      thousandSeparator,
      allowNegative = true,
      precision,
      clampValue = false,
      showButtons = true,
      disabled = false,
      readOnly = false,
      className,
      style,
      ariaLabel = 'Number Input',
      ariaDescribedby,
      ariaInvalid = false,
      ariaRequired = false,
      role,
      tabIndex = 0,
      testId,
      pattern,
      conditionalValidation,
      tooltip,
      ...props
    },
    ref
  ) => {
    const {
      value: localValue,
      setValue,
      increment,
      decrement,
    } = useNumberInput({
      value,
      defaultValue,
      min,
      max,
      step,
      precision,
      onChange,
      clampValue,
    });

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        if (newValue === '') {
          setValue(0);
          return;
        }

        const numericValue = parseFloat(newValue);
        if (!isNaN(numericValue)) {
          if (!allowNegative && numericValue < 0) return;
          if (conditionalValidation && !conditionalValidation(numericValue))
            return;
          setValue(numericValue);
        }
      },
      [setValue, allowNegative, conditionalValidation]
    );

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (disabled || readOnly) return;

        if (event.key === 'ArrowUp') {
          event.preventDefault();
          increment();
        } else if (event.key === 'ArrowDown') {
          event.preventDefault();
          decrement();
        }
      },
      [disabled, readOnly, increment, decrement]
    );

    const formattedValue = formatNumber(localValue, {
      locale,
      format,
      currency,
      precision,
      thousandSeparator,
      decimalSeparator,
    });

    const input = (
      <StyledInput
        ref={ref}
        type="text"
        value={formattedValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        readOnly={readOnly}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        aria-invalid={ariaInvalid}
        aria-required={ariaRequired}
        role={role}
        tabIndex={tabIndex}
        data-testid={testId}
        pattern={pattern}
        $hasError={ariaInvalid}
        $disabled={disabled}
        {...props}
      />
    );

    return (
      <ThemeProvider theme={theme}>
        <StyledContainer
          className={className}
          style={style}
          $disabled={disabled}
        >
          {tooltip ? <Tooltip title={tooltip}>{input}</Tooltip> : input}
          {showButtons && !disabled && !readOnly && (
            <StyledButtonGroup>
              <StyledButton
                type="button"
                onClick={increment}
                disabled={
                  disabled || (typeof max === 'number' && localValue >= max)
                }
                aria-label="Increment value"
              >
                ▲
              </StyledButton>
              <StyledButton
                type="button"
                onClick={decrement}
                disabled={
                  disabled ||
                  (typeof min === 'number' && localValue <= min) ||
                  (!allowNegative && localValue <= 0)
                }
                aria-label="Decrement value"
              >
                ▼
              </StyledButton>
            </StyledButtonGroup>
          )}
        </StyledContainer>
      </ThemeProvider>
    );
  }
);

NumberInput.displayName = 'NumberInput';
