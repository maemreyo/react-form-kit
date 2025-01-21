import React, { memo, forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import {
  StyledErrorContainer,
  StyledIcon,
  StyledMessage,
  StyledLink,
} from './styled';
import { InputErrorMessageProps } from './types';
import { useErrorIcon, useTruncatedMessage } from './hooks';

export const InputErrorMessage = memo(
  forwardRef<HTMLDivElement, InputErrorMessageProps>(
    (
      {
        message,
        show = false,
        type = 'error',
        position = 'below',
        className,
        style,
        ariaLabel,
        icon,
        animation = 'fade',
        onClick,
        testId,
        inputId,
        maxLength,
        truncate = false,
        link,
        linkText = 'Learn more',
      },
      ref
    ) => {
      const ErrorIcon = useErrorIcon(type);
      const getTruncatedMessage = useTruncatedMessage(message, maxLength);

      const displayMessage = truncate
        ? getTruncatedMessage(message, maxLength)
        : message;

      return (
        <ThemeProvider theme={theme}>
          <StyledErrorContainer
            ref={ref}
            $show={show}
            $type={type}
            $position={position}
            $animation={animation}
            className={className}
            style={style}
            onClick={onClick}
            role="alert"
            aria-live="polite"
            data-testid={testId}
            {...(inputId && { id: `${inputId}-error` })}
            {...(ariaLabel && { 'aria-label': ariaLabel })}
          >
            {icon || (
              <StyledIcon>
                <ErrorIcon size={16} />
              </StyledIcon>
            )}
            <StyledMessage>{displayMessage}</StyledMessage>
            {link && (
              <StyledLink href={link} target="_blank" rel="noopener noreferrer">
                {linkText}
              </StyledLink>
            )}
          </StyledErrorContainer>
        </ThemeProvider>
      );
    }
  )
);

InputErrorMessage.displayName = 'InputErrorMessage';
