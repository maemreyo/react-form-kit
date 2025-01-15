import React, { forwardRef, useCallback, useRef, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import {
  StyledContainer,
  StyledTextArea,
  StyledCharacterCount,
} from './styled';
import { TextAreaControlProps } from './types';

export const TextAreaControl = forwardRef<
  HTMLTextAreaElement,
  TextAreaControlProps
>(
  (
    {
      value,
      defaultValue = '',
      onChange,
      placeholder = '',
      minHeight = 'auto',
      maxHeight = 'none',
      showCharacterCount = false,
      maxLength,
      lineWrap = true,
      resize = 'vertical',
      disabled = false,
      readOnly = false,
      className,
      style,
      ariaLabel = 'Text Area',
      ariaDescribedby,
      ariaInvalid = false,
      ariaRequired = false,
      ariaDisabled = false,
      role,
      tabIndex = 0,
      testId,
    },
    ref
  ) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const combinedRef = useCallback(
      (node: HTMLTextAreaElement) => {
        textAreaRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    const adjustHeight = useCallback(() => {
      const element = textAreaRef.current;
      if (!element) return;

      element.style.height = 'auto';
      element.style.height = `${element.scrollHeight}px`;
    }, []);

    useEffect(() => {
      adjustHeight();
    }, [value, adjustHeight]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      adjustHeight();
      onChange?.(event);
    };

    const currentLength = (value || defaultValue || '').length;
    const isOverLimit = maxLength ? currentLength > maxLength : false;

    return (
      <ThemeProvider theme={theme}>
        <StyledContainer
          className={className}
          style={style}
          $disabled={disabled}
        >
          <StyledTextArea
            ref={combinedRef}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            maxLength={maxLength}
            $minHeight={minHeight}
            $maxHeight={maxHeight}
            $lineWrap={lineWrap}
            $resize={resize}
            $disabled={disabled}
            aria-label={ariaLabel}
            aria-describedby={ariaDescribedby}
            aria-invalid={ariaInvalid}
            aria-required={ariaRequired}
            aria-disabled={ariaDisabled}
            role={role}
            tabIndex={tabIndex}
            data-testid={testId}
          />
          {showCharacterCount && (
            <StyledCharacterCount $isOverLimit={isOverLimit}>
              {currentLength}
              {maxLength ? `/${maxLength}` : ''} characters
            </StyledCharacterCount>
          )}
        </StyledContainer>
      </ThemeProvider>
    );
  }
);

TextAreaControl.displayName = 'TextAreaControl';
