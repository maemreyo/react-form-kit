import styled, { css, keyframes } from 'styled-components';
import { SpinnerType, MessagePosition } from './types';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const dotsAnimation = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  }
  40% { 
    transform: scale(1.0);
  }
`;

const barsAnimation = keyframes`
  0% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1.0);
  }
  40% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(0.4);
  }
`;

export const StyledSpinnerWrapper = styled.div<{
  $center?: boolean;
}>`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  ${(props) =>
    props.$center &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
`;

export const StyledOverlay = styled.div<{
  $overlayColor: string;
  $overlayBlur: string;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.$overlayColor};
  backdrop-filter: blur(${(props) => props.$overlayBlur});
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const StyledSpinner = styled.div<{
  $type: SpinnerType;
  $size: number;
  $color: string;
  $thickness: number;
  $speed: number;
  $reverse?: boolean;
}>`
  ${(props) => {
    switch (props.$type) {
      case 'circular':
        return css`
          width: ${props.$size}px;
          height: ${props.$size}px;
          border: ${props.$thickness}px solid ${props.theme.colors.light};
          border-top-color: ${props.$color};
          border-radius: 50%;
          animation: ${spinAnimation} ${props.$speed}ms linear infinite;
          animation-direction: ${props.$reverse ? 'reverse' : 'normal'};
        `;
      case 'dots':
        return css`
          display: flex;
          gap: ${props.$thickness}px;

          &::before,
          &::after {
            content: '';
            width: ${props.$size / 3}px;
            height: ${props.$size / 3}px;
            background-color: ${props.$color};
            border-radius: 50%;
            animation: ${dotsAnimation} ${props.$speed * 1.5}ms infinite
              ease-in-out both;
            animation-direction: ${props.$reverse ? 'reverse' : 'normal'};
          }

          &::before {
            animation-delay: -${props.$speed / 3}ms;
          }

          &::after {
            animation-delay: ${props.$speed / 3}ms;
          }
        `;
      case 'bars':
        return css`
          display: flex;
          gap: ${props.$thickness}px;
          height: ${props.$size}px;

          &::before,
          &::after {
            content: '';
            width: ${props.$size / 4}px;
            background-color: ${props.$color};
            animation: ${barsAnimation} ${props.$speed}ms infinite ease-in-out
              both;
            animation-direction: ${props.$reverse ? 'reverse' : 'normal'};
          }

          &::before {
            animation-delay: -${props.$speed / 2}ms;
          }

          &::after {
            animation-delay: ${props.$speed / 2}ms;
          }
        `;
    }
  }}
`;

export const StyledMessage = styled.div<{
  $position: MessagePosition;
  $size: number;
}>`
  margin: ${(props) => {
    switch (props.$position) {
      case 'above':
        return `0 0 ${props.theme.space.xs} 0`;
      case 'below':
        return `${props.theme.space.xs} 0 0 0`;
      case 'side':
        return `0 0 0 ${props.theme.space.xs}`;
      default:
        return '0';
    }
  }};
  font-family: ${(props) => props.theme.typography.primaryFont};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.text};
`;
