import styled, { css, keyframes } from 'styled-components';
import {
  BadgeType,
  BadgeSize,
  BadgeShape,
  BadgePosition,
  BadgeAnimation,
} from './types';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

interface StyledBadgeProps {
  $type: BadgeType;
  $size: BadgeSize;
  $shape: BadgeShape;
  $position: BadgePosition;
  $color?: string;
  $backgroundColor?: string;
  $offsetX: number;
  $offsetY: number;
  $isInteractive: boolean;
  $animation: BadgeAnimation;
  $animationDuration: number;
  $zIndex: number;
}

interface StyledBadgeWrapperProps {
  $disablePortal: boolean;
}

export const StyledBadgeWrapper = styled.div<StyledBadgeWrapperProps>`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
`;

export const StyledBadgeContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledBadge = styled.div<StyledBadgeProps>`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.typography.primaryFont};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  line-height: 1;
  white-space: nowrap;
  text-align: center;
  transition: all ${(props) => props.theme.transitions.transitionMD};
  z-index: ${(props) => props.$zIndex};

  ${(props) => {
    const theme = props.theme;
    const sizeMap = {
      small: {
        padding: '2px 6px',
        fontSize: theme.fontSizes[9],
        minWidth: '18px',
        height: '18px',
      },
      medium: {
        padding: '3px 8px',
        fontSize: theme.fontSizes[11],
        minWidth: '22px',
        height: '22px',
      },
      large: {
        padding: '4px 10px',
        fontSize: theme.fontSizes[13],
        minWidth: '26px',
        height: '26px',
      },
    };

    return css`
      padding: ${sizeMap[props.$size].padding};
      font-size: ${sizeMap[props.$size].fontSize};
      min-width: ${sizeMap[props.$size].minWidth};
      height: ${sizeMap[props.$size].height};
    `;
  }}

  ${(props) => {
    const theme = props.theme;
    const typeMap = {
      default: {
        color: theme.colors.text,
        bg: theme.colors.light,
      },
      primary: {
        color: theme.colors.white,
        bg: theme.colors.primary,
      },
      success: {
        color: theme.colors.white,
        bg: theme.colors.success,
      },
      warning: {
        color: theme.colors.white,
        bg: theme.colors.warning,
      },
      error: {
        color: theme.colors.white,
        bg: theme.colors.danger,
      },
    };

    return css`
      color: ${props.$color || typeMap[props.$type].color};
      background-color: ${props.$backgroundColor || typeMap[props.$type].bg};
    `;
  }}

  ${(props) => {
    const shapeMap = {
      rounded: props.theme.radius.md,
      square: '0',
      circle: '50%',
    };

    return css`
      border-radius: ${shapeMap[props.$shape]};
    `;
  }}

  ${(props) => {
    const positionMap = {
      'top-right': { top: 0, right: 0 },
      'top-left': { top: 0, left: 0 },
      'bottom-right': { bottom: 0, right: 0 },
      'bottom-left': { bottom: 0, left: 0 },
    };

    return css`
      ${Object.entries(positionMap[props.$position]).map(
        ([key, value]) => css`
          ${key}: calc(${value}px + ${key === 'top' || key === 'bottom'
            ? props.$offsetY
            : props.$offsetX}px);
        `
      )}
    `;
  }}

  ${(props) =>
    props.$isInteractive &&
    css`
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    `}

  ${(props) => {
    const animationMap = {
      fade: fadeIn,
      scale: scaleIn,
      none: 'none',
    };

    return (
      props.$animation !== 'none' &&
      css`
        animation: ${animationMap[props.$animation]}
          ${props.$animationDuration}ms
          ${props.theme.transitions.transitionEaseInOut};
      `
    );
  }}
`;
