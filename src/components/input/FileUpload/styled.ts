import styled from 'styled-components';

interface StyledContainerProps {
  $disabled?: boolean;
}

interface StyledDropZoneProps {
  $isDragging: boolean;
  $disabled?: boolean;
}

interface StyledProgressBarProps {
  $progress: number;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space.md};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.$disabled ? 'none' : 'auto')};
`;

export const StyledDropZone = styled.div<StyledDropZoneProps>`
  border: 2px dashed
    ${(props) =>
      props.$isDragging
        ? props.theme.colors.primary
        : props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  padding: ${(props) => props.theme.space.xl};
  text-align: center;
  background-color: ${(props) =>
    props.$isDragging
      ? props.theme.colors['primary-100']
      : props.theme.colors['light-300']};
  transition: all ${(props) => props.theme.transitions.transitionNormal};
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};

  &:hover {
    border-color: ${(props) => !props.$disabled && props.theme.colors.primary};
    background-color: ${(props) =>
      !props.$disabled && props.theme.colors['primary-100']};
  }
`;

export const StyledFileInput = styled.input`
  display: none;
`;

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: ${(props) => props.theme.radius.md};
  padding: ${(props) => props.theme.componentDefaults.buttonPadding};
  cursor: pointer;
  transition: background-color
    ${(props) => props.theme.transitions.transitionNormal};

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.colors['primary-hover']};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const StyledFileList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space.sm};
`;

export const StyledFileItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space.sm};
  padding: ${(props) => props.theme.space.sm};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.sm};
  background-color: ${(props) => props.theme.colors['light-100']};
`;

export const StyledPreview = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: ${(props) => props.theme.radius.sm};
`;

export const StyledProgressBar = styled.div<StyledProgressBarProps>`
  width: 100%;
  height: 4px;
  background-color: ${(props) => props.theme.colors['light-300']};
  border-radius: ${(props) => props.theme.radius.pill};
  overflow: hidden;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.$progress}%;
    background-color: ${(props) => props.theme.colors.primary};
    transition: width ${(props) => props.theme.transitions.transitionNormal};
  }
`;

export const StyledError = styled.div`
  color: ${(props) => props.theme.colors.danger};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-top: ${(props) => props.theme.space.xs};
`;
