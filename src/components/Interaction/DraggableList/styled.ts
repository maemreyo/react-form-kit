import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledDraggableList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledDraggableItem = styled(motion.li)`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.space.sm};
  margin-bottom: ${(props) => props.theme.space.xs};
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.sm};
  cursor: grab;
  transition: background-color 0.2s ease;

  &:active {
    cursor: grabbing;
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    outline-offset: 2px;
  }

  &[aria-grabbed='true'] {
    background-color: ${(props) => props.theme.colors['primary-100']};
  }
`;

export const StyledDragHandle = styled.span`
  margin-right: ${(props) => props.theme.space.sm};
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;
