import styled, { css, keyframes } from 'styled-components';
import { ErrorPosition, ErrorType } from './types';

interface StyledErrorContainerProps {
  $position: ErrorPosition;
  $type: ErrorType;
  $show: boolean;
  $animation: 'fade' | 'slide' | 'none';
}

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

const getAnimationStyles = (animation: 'fade' | 'slide' | 'none') => {
  switch (animation) {
    case 'fade':
      return css`
        animation: ${fadeIn} ${(props) => props.theme.transitions.transitionMD}
          ${(props) => props.theme.transitions.transitionEaseInOut};
      `;
    case 'slide':
      return css`
        animation: ${slideIn} ${(props) => props.theme.transitions.transitionMD}
          ${(props) => props.theme.transitions.transitionEaseInOut};
      `;
    default:
      return '';
  }
};

const getTypeStyles = (type: ErrorType) => {
  switch (type) {
    case 'warning':
      return css`
        color: ${(props) => props.theme.colors.warning};
        background-color: ${(props) => props.theme.colors['warning-100']};
      `;
    case 'info':
      return css`
        color: ${(props) => props.theme.colors.info};
        background-color: ${(props) => props.theme.colors['info-100']};
      `;
    default:
      return css`
        color: ${(props) => props.theme.colors.danger};
        background-color: ${(props) => props.theme.colors['danger-100']};
      `;
  }
};

export const StyledErrorContainer = styled.div<StyledErrorContainerProps>`
  display: ${(props) => (props.$show ? 'flex' : 'none')};
  align-items: center;
  gap: ${(props) => props.theme.space.xs};
  padding: ${(props) => props.theme.space.xs} ${(props) => props.theme.space.sm};
  border-radius: ${(props) => props.theme.radius.sm};
  font-size: ${(props) => props.theme.fontSizes[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin: ${(props) =>
      props.$position === 'below' ? props.theme.space.xs : '0'}
    0;

  ${(props) => getTypeStyles(props.$type)}
  ${(props) => getAnimationStyles(props.$animation)}
  
  ${(props) =>
    props.$position === 'side' &&
    css`
      margin-left: ${props.theme.space.sm};
    `}
`;

export const StyledIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledMessage = styled.span`
  flex: 1;
`;

export const StyledLink = styled.a`
  color: inherit;
  text-decoration: underline;
  margin-left: ${(props) => props.theme.space.xs};

  &:hover {
    text-decoration: none;
  }
`;
