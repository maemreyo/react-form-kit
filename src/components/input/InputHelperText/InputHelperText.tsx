import React, { memo, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import {
  StyledHelperTextContainer,
  StyledHelperText,
  StyledIcon,
  StyledLink,
} from './styled';
import { InputHelperTextProps } from './types';
import { truncateText } from './utils';

export const InputHelperText = memo(
  ({
    text,
    show = true,
    type = 'info',
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
    isDisabled = false,
    isRequired = false,
  }: InputHelperTextProps) => {
    const handleClick = useCallback(() => {
      if (!isDisabled && onClick) {
        onClick();
      }
    }, [isDisabled, onClick]);

    const displayText =
      typeof text === 'string' && truncate && maxLength
        ? truncateText(text, maxLength)
        : text;

    return (
      <ThemeProvider theme={theme}>
        <StyledHelperTextContainer
          $position={position}
          $animation={animation}
          $show={show}
          className={className}
          style={style}
          onClick={handleClick}
          data-testid={testId}
          role="status"
          aria-label={ariaLabel}
          {...(inputId ? { 'aria-describedby': inputId } : {})}
        >
          {icon && <StyledIcon>{icon}</StyledIcon>}
          <StyledHelperText $type={type} $isDisabled={isDisabled}>
            {displayText}
            {isRequired && <span aria-hidden="true"> *</span>}
            {link && (
              <StyledLink href={link} target="_blank" rel="noopener noreferrer">
                {linkText}
              </StyledLink>
            )}
          </StyledHelperText>
        </StyledHelperTextContainer>
      </ThemeProvider>
    );
  }
);

InputHelperText.displayName = 'InputHelperText';
