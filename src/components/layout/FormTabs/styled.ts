import styled, { css, keyframes } from 'styled-components';
import { StyledTabsProps, TabPosition, TabVariant } from './types';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const StyledTabsContainer = styled.div<StyledTabsProps>`
  display: flex;
  flex-direction: ${({ $position }) =>
    $position === 'left' || $position === 'right' ? 'row' : 'column'};
  gap: ${({ $gap }) => $gap};
  align-items: ${({ $alignItems }) => $alignItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};
`;

export const StyledTabList = styled.div<{
  $position: TabPosition;
  $variant: TabVariant;
  $columns: number;
}>`
  display: grid;
  grid-template-columns: ${({ $columns }) => `repeat(${$columns}, 1fr)`};
  gap: ${({ theme }) => theme.space.sm};

  ${({ $position, $variant, theme }) => {
    const borderColor = theme.colors.border;

    if ($variant === 'underline') {
      return css`
        border-bottom: 1px solid ${borderColor};
      `;
    }

    if ($variant === 'line') {
      return css`
        border: 1px solid ${borderColor};
        border-radius: ${theme.radius.md};
      `;
    }
  }}
`;

export const StyledTab = styled.button<{
  $active: boolean;
  $variant: TabVariant;
  $disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.text};
  background: transparent;
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  transition: all ${({ theme }) => theme.transitions.transitionNormal};

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ $active, $variant, theme }) => {
    if ($variant === 'underline' && $active) {
      return css`
        border-bottom: 2px solid ${theme.colors.primary};
      `;
    }

    if ($variant === 'buttons') {
      return css`
        background: ${$active ? theme.colors.primary : 'transparent'};
        color: ${$active ? theme.colors.white : theme.colors.text};
        border-radius: ${theme.radius.md};

        &:hover:not(:disabled) {
          background: ${theme.colors['primary-hover']};
          color: ${theme.colors.white};
        }
      `;
    }
  }}
`;

export const StyledTabPanel = styled.div<{
  $active: boolean;
  $animated?: boolean;
}>`
  display: ${({ $active }) => ($active ? 'block' : 'none')};
  animation: ${({ $animated }) =>
    $animated
      ? css`
          ${fadeIn} 0.3s ease-in-out
        `
      : 'none'};
`;
