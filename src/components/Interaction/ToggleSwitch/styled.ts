import styled, { css } from 'styled-components';
import { ToggleSwitchSize, LabelPosition, AnimationType } from './types';

interface StyledToggleContainerProps {
  $labelPosition: LabelPosition;
}

interface StyledToggleSwitchProps {
  $isOn: boolean;
  $size: ToggleSwitchSize;
  $disabled: boolean;
  $onColor?: string;
  $offColor?: string;
  $animation: AnimationType;
  $animationDuration: number;
  $width: number;
  $height: number;
}

interface StyledToggleThumbProps {
  $isOn: boolean;
  $size: ToggleSwitchSize;
  $thumbColor?: string;
  $animation: AnimationType;
  $animationDuration: number;
  $thumbSize: number;
  $thumbOffset: number;
}

interface StyledLabelTextProps {
  $size: ToggleSwitchSize;
  $disabled: boolean;
}

export const StyledToggleContainer = styled.div<StyledToggleContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) =>
    props.$labelPosition === 'left' ? 'row-reverse' : 'row'};
  gap: ${(props) => props.theme.space.sm};
`;

export const StyledToggleSwitch = styled.div<StyledToggleSwitchProps>`
  position: relative;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  background-color: ${(props) =>
    props.$isOn
      ? props.$onColor || props.theme.colors.primary
      : props.$offColor || props.theme.colors['light-400']};
  border-radius: ${(props) => props.$height}px;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  transition: ${(props) =>
    props.$animation === 'smooth'
      ? `background-color ${props.$animationDuration}ms ${props.theme.transitions.transitionEaseInOut}`
      : 'none'};

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const StyledToggleThumb = styled.div<StyledToggleThumbProps>`
  position: absolute;
  top: ${(props) => props.$thumbOffset}px;
  left: ${(props) =>
    props.$isOn
      ? `calc(100% - ${props.$thumbSize + props.$thumbOffset}px)`
      : `${props.$thumbOffset}px`};
  width: ${(props) => props.$thumbSize}px;
  height: ${(props) => props.$thumbSize}px;
  background-color: ${(props) => props.$thumbColor || props.theme.colors.white};
  border-radius: 50%;
  transition: ${(props) =>
    props.$animation === 'smooth'
      ? `left ${props.$animationDuration}ms ${props.theme.transitions.transitionEaseInOut}`
      : 'none'};
  box-shadow: ${(props) => props.theme.shadows.sm};
`;

export const StyledLabelText = styled.span<StyledLabelTextProps>`
  font-family: ${(props) => props.theme.typography.primaryFont};
  font-size: ${(props) =>
    props.$size === 'small'
      ? props.theme.fontSizes.small
      : props.$size === 'medium'
        ? props.theme.fontSizes.medium
        : props.theme.fontSizes.large};
  color: ${(props) =>
    props.$disabled
      ? props.theme.colors['text-muted']
      : props.theme.colors.text};
`;
