import styled, { css } from 'styled-components';
import { Direction, Alignment, Spacing, ListMode } from './types';

interface StyledListContainerProps {
  $direction: Direction;
  $alignment: Alignment;
  $spacing: Spacing;
  $maxHeight?: number | string;
  $maxWidth?: number | string;
  $mode: ListMode;
  $responsive: boolean;
  $wrapItems: boolean;
}

export const StyledListContainer = styled.div<StyledListContainerProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.$direction === 'horizontal' ? 'row' : 'column'};
  align-items: ${(props) => props.$alignment};
  gap: ${(props) =>
    typeof props.$spacing === 'number'
      ? `${props.$spacing}px`
      : props.theme.space[props.$spacing]};
  ${(props) =>
    props.$maxHeight &&
    css`
      max-height: ${props.$maxHeight}px;
    `}
  ${(props) =>
    props.$maxWidth &&
    css`
      max-width: ${props.$maxWidth}px;
    `}
  ${(props) =>
    props.$wrapItems &&
    css`
      flex-wrap: wrap;
    `}
  
  ${(props) =>
    props.$responsive &&
    css`
      @media (max-width: ${props.theme.breakpoints.sm}) {
        flex-direction: column;
        align-items: stretch;
      }
    `}
`;

export const StyledItem = styled.div<{
  $hoverable?: boolean;
  $clickable?: boolean;
  $selectable?: boolean;
  $selected?: boolean;
  $mode: ListMode;
}>`
  ${(props) =>
    props.$hoverable &&
    css`
      &:hover {
        background-color: ${props.theme.colors['light-300']};
      }
    `}

  ${(props) =>
    props.$clickable &&
    css`
      cursor: pointer;
    `}
  
  ${(props) =>
    props.$selectable &&
    css`
      user-select: none;
      padding: ${props.theme.space.xs};
      border-radius: ${props.theme.radius.sm};

      ${props.$selected &&
      css`
        background-color: ${props.theme.colors['primary-100']};
      `}
    `}
  
  ${(props) =>
    props.$mode === 'badges' &&
    css`
      background-color: ${props.theme.colors['light-300']};
      padding: ${props.theme.space.xs} ${props.theme.space.xs};
      border-radius: ${props.theme.radius.pill};
      display: inline-flex;
      align-items: center;
    `}
`;
