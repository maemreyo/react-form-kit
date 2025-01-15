import React, { forwardRef, useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import {
  StyledInputContainer,
  StyledInputWrapper,
  StyledInput,
  StyledIcon,
  StyledClearButton,
  StyledMessage,
} from './styled';
import { InputBaseProps } from './types';
import { useInputValidation } from './hooks';

export const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      placeholder,
      disabled = false,
      readOnly = false,
      type = 'text',
      name,
      id,
      autoComplete = 'off',
      maxLength,
      minLength,
      size = 'md',
      className,
      style,
      required = false,
      pattern,
      validationRules,
      errorMessage,
      successMessage,
      warningMessage,
      validationTiming = 'onBlur',
      iconLeft,
      iconRight,
      clearButton = false,
      focusRing = true,
      status = 'default',
      loadingIndicator,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      'aria-invalid': ariaInvalid,
      'aria-required': ariaRequired,
      'aria-disabled': ariaDisabled,
      role,
      tabIndex,
      debounce,
      ...rest
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(defaultValue || '');
    const { validate, error, success } = useInputValidation(
      validationRules,
      validationTiming
    );

    const handleChange = useCallback(
      async (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        if (!value) {
          setInputValue(newValue);
        }

        onChange?.(event);

        if (validationTiming === 'onChange') {
          await validate(newValue);
        }
      },
      [onChange, validate, validationTiming, value]
    );

    const handleBlur = useCallback(
      async (event: React.FocusEvent<HTMLInputElement>) => {
        onBlur?.(event);

        if (validationTiming === 'onBlur') {
          await validate(event.target.value);
        }
      },
      [onBlur, validate, validationTiming]
    );

    const handleClear = useCallback(() => {
      if (!value) {
        setInputValue('');
      }
      const event = {
        target: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange?.(event);
    }, [onChange, value]);

    const currentStatus = error ? 'error' : success ? 'success' : status;

    return (
      <ThemeProvider theme={theme}>
        <StyledInputContainer
          $size={size}
          $status={currentStatus}
          $disabled={disabled}
          $focusRing={focusRing}
          className={className}
          style={style}
        >
          <StyledInputWrapper
            $hasLeftIcon={!!iconLeft}
            $hasRightIcon={!!iconRight || clearButton}
          >
            {iconLeft && <StyledIcon $position="left">{iconLeft}</StyledIcon>}

            <StyledInput
              ref={ref}
              type={type}
              value={value ?? inputValue}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={onFocus}
              onKeyDown={onKeyDown}
              placeholder={placeholder}
              disabled={disabled}
              readOnly={readOnly}
              name={name}
              id={id}
              autoComplete={autoComplete}
              maxLength={maxLength}
              minLength={minLength}
              required={required}
              pattern={pattern}
              aria-label={ariaLabel}
              aria-describedby={ariaDescribedby}
              aria-invalid={ariaInvalid ?? !!error}
              aria-required={ariaRequired ?? required}
              aria-disabled={ariaDisabled ?? disabled}
              role={role}
              tabIndex={tabIndex}
              {...rest}
            />

            {iconRight && (
              <StyledIcon $position="right">{iconRight}</StyledIcon>
            )}

            {clearButton && (value || inputValue) && (
              <StyledClearButton
                type="button"
                onClick={handleClear}
                aria-label="Clear input"
              >
                ✕
              </StyledClearButton>
            )}
          </StyledInputWrapper>
        </StyledInputContainer>

        {error && (
          <StyledMessage $type="error">{errorMessage || error}</StyledMessage>
        )}

        {success && successMessage && (
          <StyledMessage $type="success">{successMessage}</StyledMessage>
        )}

        {!error && !success && warningMessage && (
          <StyledMessage $type="warning">{warningMessage}</StyledMessage>
        )}
      </ThemeProvider>
    );
  }
);

InputBase.displayName = 'InputBase';
