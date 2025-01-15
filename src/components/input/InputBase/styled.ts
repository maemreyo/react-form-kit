import styled, { css } from 'styled-components';
import { InputBaseProps } from './types';

interface StyledInputContainerProps {
  $size?: InputBaseProps['size'];
  $status?: InputBaseProps['status'];
  $disabled?: boolean;
  $focusRing?: boolean;
}

interface StyledInputWrapperProps {
  $hasLeftIcon?: boolean;
  $hasRightIcon?: boolean;
}

export const StyledInputContainer = styled.div<StyledInputContainerProps>`
  position: relative;
  width: 100%;

  ${({ theme, $size = 'md' }) => {
    const sizes = {
      sm: theme.space.sm,
      md: theme.space.md,
      lg: theme.space.lg,
    };

    return css`
      min-height: ${sizes[$size]};
    `;
  }}

  ${({ theme, $status = 'default', $disabled }) => {
    const statusColors = {
      default: theme.colors.border,
      error: theme.colors.danger,
      success: theme.colors.success,
      warning: theme.colors.warning,
      loading: theme.colors.primary,
    };

    return css`
      border: 1px solid ${statusColors[$status]};
      background-color: ${$disabled
        ? theme.colors['light-300']
        : theme.colors.white};
      opacity: ${$disabled ? 0.7 : 1};
    `;
  }}

  ${({ theme, $focusRing }) =>
    $focusRing &&
    css`
      &:focus-within {
        outline: none;
        box-shadow: ${theme.shadows.sm};
        border-color: ${theme.colors.primary};
      }
    `}

  border-radius: ${({ theme }) => theme.radius.md};
  transition: ${({ theme }) => theme.transitions.transitionNormal};
`;

export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  ${({ $hasLeftIcon }) =>
    $hasLeftIcon &&
    css`
      padding-left: 2.5rem;
    `}

  ${({ $hasRightIcon }) =>
    $hasRightIcon &&
    css`
      padding-right: 2.5rem;
    `}
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  background: none;
  padding: ${({ theme }) => theme.space.sm};
  font-family: ${({ theme }) => theme.typography.primaryFont};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors['text-muted']};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const StyledIcon = styled.span<{ $position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $position }) =>
    $position === 'left' ? 'left: 0.75rem;' : 'right: 0.75rem;'}
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors['text-muted']};
`;

export const StyledClearButton = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors['text-muted']};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const StyledMessage = styled.span<{
  $type: 'error' | 'success' | 'warning';
}>`
  display: block;
  margin-top: ${({ theme }) => theme.space.xs};
  font-size: ${({ theme }) => theme.fontSizes.small};

  ${({ theme, $type }) => {
    const messageColors = {
      error: theme.colors.danger,
      success: theme.colors.success,
      warning: theme.colors.warning,
    };

    return css`
      color: ${messageColors[$type]};
    `;
  }}
`;
