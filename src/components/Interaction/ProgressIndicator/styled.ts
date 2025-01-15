import styled, { css, keyframes } from 'styled-components';
import {
  ProgressType,
  ProgressSize,
  LabelPosition,
  OverlayBlur,
} from './types';

const indeterminateAnimation = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`;

interface ProgressContainerProps {
  $type: ProgressType;
  $size: ProgressSize;
  $maxWidth?: string | number;
  $maxHeight?: string | number;
  $zIndex?: number;
}

export const ProgressContainer = styled.div<ProgressContainerProps>`
  position: relative;
  width: ${(props) => props.$maxWidth || '100%'};
  height: ${(props) => {
    if (props.$type === 'circular') {
      return typeof props.$size === 'number'
        ? `${props.$size}px`
        : props.theme.spacing[props.$size] || '48px';
    }
    return 'auto';
  }};
  max-height: ${(props) => props.$maxHeight || 'auto'};
  z-index: ${(props) => props.$zIndex || 1000};
`;

interface ProgressBarProps {
  $value: number;
  $color?: string;
  $thickness?: number;
  $isIndeterminate?: boolean;
  $animation?: 'smooth' | 'none';
  $animationDuration?: number;
}

export const LinearProgressBar = styled.div<ProgressBarProps>`
  width: 100%;
  height: ${(props) => props.$thickness || 4}px;
  background-color: ${(props) => props.theme.colors['light-300']};
  border-radius: ${(props) => props.theme.radius.pill};
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => (props.$isIndeterminate ? '100%' : `${props.$value}%`)};
    background-color: ${(props) => props.$color || props.theme.colors.primary};
    border-radius: inherit;
    transition: ${(props) =>
      props.$animation === 'smooth'
        ? `width ${props.$animationDuration || 300}ms ${props.theme.transitions.transitionEaseInOut}`
        : 'none'};

    ${(props) =>
      props.$isIndeterminate &&
      css`
        width: 35%;
        animation: ${indeterminateAnimation} 1.5s infinite;
      `}
  }
`;

interface CircularProgressProps extends ProgressBarProps {
  $size: ProgressSize;
}

export const CircularProgress = styled.svg<CircularProgressProps>`
  transform: rotate(-90deg);
  width: ${(props) =>
    typeof props.$size === 'number'
      ? `${props.$size}px`
      : props.theme.spacing[props.$size] || '48px'};
  height: ${(props) =>
    typeof props.$size === 'number'
      ? `${props.$size}px`
      : props.theme.spacing[props.$size] || '48px'};
`;

interface ProgressLabelProps {
  $position: LabelPosition;
  $type: ProgressType;
}

export const ProgressLabel = styled.span<ProgressLabelProps>`
  position: ${(props) =>
    props.$position === 'inside' ? 'absolute' : 'static'};
  ${(props) =>
    props.$position === 'inside' &&
    css`
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    `}
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  text-align: center;
  margin: ${(props) =>
    props.$position === 'top' || props.$position === 'bottom'
      ? props.theme.space.xs
      : 0};
`;

interface OverlayProps {
  $color: string;
  $blur: OverlayBlur;
}

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.$color};
  backdrop-filter: ${(props) => {
    switch (props.$blur) {
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

export const CancelButton = styled.button`
  position: absolute;
  right: ${(props) => props.theme.space.sm};
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${(props) => props.theme.colors['text-muted']};
  cursor: pointer;
  padding: ${(props) => props.theme.space.xs};

  &:hover {
    color: ${(props) => props.theme.colors.danger};
  }
`;
