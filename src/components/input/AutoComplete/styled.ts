import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.danger : theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  outline: none;
  transition: ${({ theme }) => theme.transitions.transitionNormal};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['primary-100']};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors['light-300']};
    cursor: not-allowed;
  }
`;

export const SuggestionList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 300px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  margin-top: ${({ theme }) => theme.space.xs};
  padding: ${({ theme }) => theme.space.xs} 0;
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease;
`;

export const SuggestionItem = styled.li<{ $isActive: boolean }>`
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.transitionFast};
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors['light-300'] : 'transparent'};

  &:hover {
    background-color: ${({ theme }) => theme.colors['light-300']};
  }
`;

export const HighlightedText = styled.span`
  background-color: ${({ theme }) => theme.colors['primary-100']};
  color: ${({ theme }) => theme.colors.primary};
`;

export const ClearButton = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.space.sm};
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.space.xs};
  color: ${({ theme }) => theme.colors['text-muted']};
  transition: ${({ theme }) => theme.transitions.transitionFast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-top: ${({ theme }) => theme.space.xs};
`;

export const LoadingIndicator = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.space.sm};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.primary};
`;
