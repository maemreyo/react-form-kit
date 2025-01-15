import styled from 'styled-components';
import { ScrollAreaProps } from './types';

interface StyledScrollAreaProps {
  $smoothScrolling?: boolean;
  $overflowX?: ScrollAreaProps['overflowX'];
  $overflowY?: ScrollAreaProps['overflowY'];
  $scrollAnimationDuration?: number;
  $scrollAnimationEasing?: string;
  $zIndex?: number;
}

export const StyledScrollArea = styled.div<StyledScrollAreaProps>`
  position: relative;
  overflow-x: ${(props) => props.$overflowX};
  overflow-y: ${(props) => props.$overflowY};
  scroll-behavior: ${(props) => (props.$smoothScrolling ? 'smooth' : 'auto')};
  transition: ${(props) =>
    props.$smoothScrolling
      ? `all ${props.$scrollAnimationDuration}ms ${props.$scrollAnimationEasing}`
      : 'none'};
  z-index: ${(props) => props.$zIndex};

  /* Custom Scrollbar Styling */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors['light-300']};
    border-radius: ${(props) => props.theme.radius.sm};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors['secondary-400']};
    border-radius: ${(props) => props.theme.radius.sm};

    &:hover {
      background: ${(props) => props.theme.colors['secondary-500']};
    }
  }
`;
