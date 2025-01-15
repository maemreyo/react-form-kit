import styled, { css } from 'styled-components';

interface StyledContainerProps {
  $disabled?: boolean;
}

interface StyledInputProps {
  $hasError?: boolean;
  $disabled?: boolean;
}

interface StyledButtonProps {
  $disabled?: boolean;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
`;

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  padding: ${(props) => props.theme.space.sm};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.typography.primaryFont};
  border: 1px solid
    ${(props) =>
      props.$hasError ? props.theme.colors.danger : props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  outline: none;
  transition: ${(props) => props.theme.transitions.transitionNormal};

  &:focus {
    border-color: ${(props) =>
      props.$hasError ? props.theme.colors.danger : props.theme.colors.primary};
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.$hasError
          ? props.theme.colors['danger-100']
          : props.theme.colors['primary-100']};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors['light-300']};
    cursor: not-allowed;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  padding: ${(props) => props.theme.space.sm} ${(props) => props.theme.space.md};
  margin: 0;
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition: ${(props) => props.theme.transitions.transitionNormal};

  &:hover:not(:disabled) {
    background: ${(props) => props.theme.colors['light-300']};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => props.theme.space.xs};

  ${StyledButton} + ${StyledButton} {
    margin-top: -1px;
  }
`;
