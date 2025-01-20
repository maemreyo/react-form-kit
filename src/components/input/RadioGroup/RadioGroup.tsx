import React, { memo } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import { RadioGroupProps } from './types';
import { useRadioGroup } from './hooks';
import { StyledRadioGroup, StyledRadioItem, StyledError } from './styled';

export const RadioGroup = memo<RadioGroupProps>(
  ({
    options,
    value,
    defaultValue,
    onChange,
    orientation = 'vertical',
    disabled = false,
    error = '',
    spacing = 'md',
    labelPosition = 'right',
    className,
    style,
    ariaLabel = 'Radio Group',
    ariaDescribedby,
    ariaInvalid,
    ariaRequired,
    ariaDisabled,
    role = 'radiogroup',
    tabIndex = 0,
    testId,
  }: RadioGroupProps) => {
    const { selectedValue, handleChange } = useRadioGroup(
      value,
      defaultValue,
      onChange
    );

    return (
      <ThemeProvider theme={theme}>
        <StyledRadioGroup
          $orientation={orientation}
          $disabled={disabled}
          $error={!!error}
          className={className}
          style={style}
          role={role}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedby}
          aria-invalid={ariaInvalid}
          aria-required={ariaRequired}
          aria-disabled={ariaDisabled}
          tabIndex={tabIndex}
          data-testid={testId}
        >
          {options.map((option) => (
            <StyledRadioItem
              key={option.value}
              $labelPosition={labelPosition}
              $spacing={spacing}
              $disabled={disabled || option.disabled}
              $error={!!error}
            >
              <input
                type="radio"
                value={option.value}
                checked={selectedValue === option.value}
                onChange={() => handleChange(option.value)}
                disabled={disabled || option.disabled}
                aria-label={
                  typeof option.label === 'string' ? option.label : undefined
                }
              />
              {option.label}
            </StyledRadioItem>
          ))}
          {error && <StyledError>{error}</StyledError>}
        </StyledRadioGroup>
      </ThemeProvider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';
