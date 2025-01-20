import styled from 'styled-components';
import {
  StyledTextAreaProps,
  StyledCharacterCountProps,
  StyledContainerProps,
} from './types';

export const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
`;

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  font-family: ${(props) => props.theme.typography.primaryFont};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors['form-control-bg']};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  padding: ${(props) => props.theme.space.sm};
  min-height: ${(props) => props.$minHeight || 'auto'};
  max-height: ${(props) => props.$maxHeight || 'none'};
  resize: ${(props) => props.$resize || 'vertical'};
  white-space: ${(props) => (props.$lineWrap ? 'pre-wrap' : 'nowrap')};
  overflow-y: auto;
  width: 100%;
  transition: ${(props) => props.theme.transitions.transitionNormal};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['primary-100']};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors['light-300']};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors['text-muted']};
  }
`;

export const StyledCharacterCount = styled.div<StyledCharacterCountProps>`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) =>
    props.$isOverLimit
      ? props.theme.colors.danger
      : props.theme.colors['text-muted']};
  margin-top: ${(props) => props.theme.space.xs};
  text-align: right;
`;
