import styled, { css } from 'styled-components';
import {
  StyledContainerProps,
  StyledInputWrapperProps,
  StyledTagListProps,
  StyledTagItemProps,
} from './types';

export const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: ${(props) => props.theme.typography.primaryFont};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.$disabled ? 'none' : 'auto')};
`;

export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 40px;
  padding: 0 ${(props) => props.theme.space.xs};
  border: 1px solid
    ${(props) => {
      if (props.$hasError) return props.theme.colors.danger;
      if (props.$isFocused) return props.theme.colors.primary;
      return props.theme.colors.border;
    }};
  border-radius: ${(props) => props.theme.radius.md};
  background-color: ${(props) => props.theme.colors['form-control-bg']};
  transition: all ${(props) => props.theme.transitions.transitionMD};

  &:hover {
    border-color: ${(props) => !props.$hasError && props.theme.colors.primary};
  }
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
  min-width: 128px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.text};
  padding: ${(props) => props.theme.space.xs};

  &::placeholder {
    color: ${(props) => props.theme.colors['text-muted']};
  }
`;

export const StyledTagList = styled.ul<StyledTagListProps>`
  list-style: none;
  padding: ${(props) => props.theme.space.sm} 0;
  margin: 0;
  min-height: 40px;
  background: ${(props) =>
    props.$isDragging ? props.theme.colors['light-300'] : 'transparent'};
  transition: background-color
    ${(props) => props.theme.transitions.transitionMD};
`;

export const StyledTagItem = styled.li<StyledTagItemProps>`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.space.sm};
  margin: ${(props) => props.theme.space.xs} 0;
  background: ${(props) =>
    props.$isDragging
      ? props.theme.colors.white
      : props.theme.colors['light-100']};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.sm};
  cursor: move;
  user-select: none;
  transition: all ${(props) => props.theme.transitions.transitionMD};

  &:hover {
    background: ${(props) => props.theme.colors['light-200']};
  }
`;

export const StyledPill = styled.span`
  display: inline-flex;
  align-items: center;
  background: ${(props) => props.theme.colors['light-200']};
  border-radius: ${(props) => props.theme.radius.pill};
  padding: ${(props) => `${props.theme.space.xs} ${props.theme.space.sm}`};
  margin: ${(props) => props.theme.space.xs};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const StyledRemoveButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors['text-muted']};
  padding: ${(props) => props.theme.space.xs};
  margin-left: ${(props) => props.theme.space.xs};
  cursor: pointer;
  transition: color ${(props) => props.theme.transitions.transitionMD};

  &:hover {
    color: ${(props) => props.theme.colors.danger};
  }
`;

export const StyledError = styled.span`
  color: ${(props) => props.theme.colors.danger};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-top: ${(props) => props.theme.space.xs};
`;

export const StyledDropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  margin-top: ${(props) => props.theme.space.xs};
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  box-shadow: ${(props) => props.theme.shadows.md};
`;

export const StyledOption = styled.div<{
  $isSelected: boolean;
  $isHighlighted: boolean;
}>`
  padding: ${(props) => props.theme.space.sm};
  cursor: pointer;
  background: ${(props) => {
    if (props.$isHighlighted) return props.theme.colors['light-300'];
    if (props.$isSelected) return props.theme.colors['light-200'];
    return 'transparent';
  }};

  &:hover {
    background: ${(props) => props.theme.colors['light-300']};
  }
`;

export const StyledNoOptions = styled.div`
  padding: ${(props) => props.theme.space.sm};
  color: ${(props) => props.theme.colors['text-muted']};
  text-align: center;
`;

export const StyledInputContainer = styled.div`
  position: relative;
  width: 100%;
`;
