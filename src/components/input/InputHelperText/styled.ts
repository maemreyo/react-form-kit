import styled, { css, keyframes } from 'styled-components';
import {
  HelperTextPosition,
  HelperTextType,
  HelperTextAnimation,
} from './types';
import { getHelperTextColor } from './utils';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { 
    opacity: 0;
    transform: translateY(-10px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
`;

interface StyledHelperTextContainerProps {
  $position: HelperTextPosition;
  $animation: HelperTextAnimation;
  $show: boolean;
}

interface StyledHelperTextProps {
  $type: HelperTextType;
  $isDisabled: boolean;
}

export const StyledHelperTextContainer = styled.div<StyledHelperTextContainerProps>`
  display: ${(props) => (props.$show ? 'flex' : 'none')};
  align-items: center;
  margin: ${(props) => {
    switch (props.$position) {
      case 'above':
        return `0 0 ${props.theme.space.xs} 0`;
      case 'side':
        return `0 0 0 ${props.theme.space.sm}`;
      default:
        return `${props.theme.space.xs} 0 0 0`;
    }
  }};

  animation: ${(props) => {
    switch (props.$animation) {
      case 'fade':
        return css`
          ${fadeIn} 0.3s ease-in-out
        `;
      case 'slide':
        return css`
          ${slideIn} 0.3s ease-in-out
        `;
      default:
        return 'none';
    }
  }};
`;

export const StyledHelperText = styled.span<StyledHelperTextProps>`
  font-family: ${(props) => props.theme.typography.primaryFont};
  font-size: ${(props) => props.theme.fontSizes['12']};
  color: ${(props) =>
    props.$isDisabled
      ? props.theme.colors['text-muted']
      : getHelperTextColor(props.$type, props.theme)};
  line-height: 1.5;
  cursor: ${(props) => (props.$isDisabled ? 'not-allowed' : 'default')};
`;

export const StyledIcon = styled.span`
  margin-right: ${(props) => props.theme.space.xs};
  display: inline-flex;
  align-items: center;
`;

export const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  margin-left: ${(props) => props.theme.space.xs};

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors['primary-hover']};
  }
`;
