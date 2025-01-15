import styled, { css, keyframes } from 'styled-components';
import { AnimationType, OverlayBlur } from './types';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

interface StyledPopoverContainerProps {
  $zIndex: number;
  $maxWidth: string | number;
  $maxHeight: string | number;
  $animation: AnimationType;
  $animationDuration: number;
  $scrollable: boolean;
}

interface StyledOverlayProps {
  $overlayColor: string;
  $overlayBlur: OverlayBlur;
  $zIndex: number;
}

interface StyledArrowProps {
  $size: number;
  $color: string;
}

export const StyledOverlay = styled.div<StyledOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.$overlayColor};
  z-index: ${(props) => props.$zIndex - 1};
  backdrop-filter: ${(props) => {
    switch (props.$overlayBlur) {
      case 'small':
        return 'blur(2px)';
      case 'medium':
        return 'blur(4px)';
      case 'large':
        return 'blur(8px)';
      default:
        return 'none';
    }
  }};
`;

export const StyledPopoverContainer = styled.div<StyledPopoverContainerProps>`
  position: absolute;
  z-index: ${(props) => props.$zIndex};
  max-width: ${(props) =>
    typeof props.$maxWidth === 'number'
      ? `${props.$maxWidth}px`
      : props.$maxWidth};
  max-height: ${(props) =>
    typeof props.$maxHeight === 'number'
      ? `${props.$maxHeight}px`
      : props.$maxHeight};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.radius.md};
  box-shadow: ${(props) => props.theme.shadows.lg};
  overflow: ${(props) => (props.$scrollable ? 'auto' : 'visible')};

  ${(props) => {
    const animationName =
      props.$animation === 'fade'
        ? fadeIn
        : props.$animation === 'slide'
          ? slideIn
          : 'none';

    return (
      props.$animation !== 'none' &&
      css`
        animation: ${animationName} ${props.$animationDuration}ms
          ${props.theme.transitions.transitionEaseInOut};
      `
    );
  }}
`;

export const StyledArrow = styled.div<StyledArrowProps>`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${(props) => props.$size}px;
  border-color: ${(props) => props.$color};
`;

export const StyledTriggerWrapper = styled.div`
  display: inline-block;
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: ${(props) => props.theme.space.sm};
  right: ${(props) => props.theme.space.sm};
  padding: ${(props) => props.theme.space.xs};
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    color: ${(props) => props.theme.colors.danger};
  }
`;
