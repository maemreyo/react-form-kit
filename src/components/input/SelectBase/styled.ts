import styled, { css, keyframes } from 'styled-components';
import {
  StyledSelectContainerProps,
  StyledDropdownProps,
  StyledOptionProps,
} from './types';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledSelectContainer = styled.div<StyledSelectContainerProps>`
  position: relative;
  width: 100%;
  font-family: ${(props) => props.theme.typography.primaryFont};

  ${(props) =>
    props.$error &&
    css`
      border-color: ${props.theme.colors.danger};
    `}

  ${(props) =>
    props.$disabled &&
    css`
      opacity: 0.6;
      pointer-events: none;
    `}
`;

export const StyledSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${(props) => props.theme.space.sm};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  background: ${(props) => props.theme.colors['form-control-bg']};
  cursor: pointer;
  min-height: 38px;
  min-width: 100px;
  width: 100%;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['primary-100']};
  }
`;

export const StyledDropdown = styled.div<StyledDropdownProps>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${(props) => props.theme.colors['form-control-bg']};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  margin-top: ${(props) => props.theme.space.xs};
  box-shadow: ${(props) => props.theme.shadows.md};
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  animation: ${fadeIn} ${(props) => props.theme.transitions.transitionMD}
    forwards;
`;

export const StyledSearchInput = styled.input`
  width: 100%;
  padding: ${(props) => props.theme.space.sm};
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const StyledOption = styled.div<StyledOptionProps>`
  padding: ${(props) => props.theme.space.sm};
  cursor: pointer;

  ${(props) =>
    props.$isSelected &&
    css`
      background: ${props.theme.colors['primary-100']};
      color: ${props.theme.colors.primary};
    `}

  ${(props) =>
    props.$isHighlighted &&
    css`
      background: ${props.theme.colors['light-300']};
    `}

  &:hover {
    background: ${(props) => props.theme.colors['light-300']};
  }
`;

export const StyledGroupLabel = styled.div`
  padding: ${(props) => props.theme.space.sm};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors['text-muted']};
  background: ${(props) => props.theme.colors['light-100']};
`;

export const StyledPlaceholder = styled.span`
  color: ${(props) => props.theme.colors['text-muted']};
`;

export const StyledClearButton = styled.button`
  background: none;
  border: none;
  padding: ${(props) => props.theme.space.xs};
  cursor: pointer;
  color: ${(props) => props.theme.colors['text-muted']};

  &:hover {
    color: ${(props) => props.theme.colors.danger};
  }
`;

export const StyledLoading = styled.div`
  padding: ${(props) => props.theme.space.sm};
  text-align: center;
  color: ${(props) => props.theme.colors['text-muted']};
`;

export const StyledError = styled.div`
  color: ${(props) => props.theme.colors.danger};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-top: ${(props) => props.theme.space.xs};
`;
