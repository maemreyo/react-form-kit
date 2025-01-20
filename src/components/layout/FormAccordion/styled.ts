import styled, { css } from 'styled-components';

interface StyledAccordionProps {
  $gap?: string;
  $alignment?: 'left' | 'center' | 'right';
}

interface StyledSectionProps {
  $isActive?: boolean;
  $disabled?: boolean;
  $animation?: boolean;
}

export const StyledAccordion = styled.div<StyledAccordionProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || props.theme.space.md};
  width: 100%;
  text-align: ${(props) => props.$alignment || 'left'};
`;

export const StyledSection = styled.div<StyledSectionProps>`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  overflow: hidden;
  background: ${(props) => props.theme.colors.white};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.$disabled ? 'none' : 'auto')};
`;

export const StyledHeader = styled.button<StyledSectionProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.space.md};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${(props) => props.theme.typography.primaryFont};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.text};
  transition: background-color
    ${(props) => props.theme.transitions.transitionMD};

  &:hover {
    background-color: ${(props) => props.theme.colors['light-300']};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    outline-offset: -2px;
  }
`;

export const StyledContent = styled.div<StyledSectionProps>`
  padding: ${(props) => props.theme.space.md};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.white};

  ${(props) =>
    props.$animation &&
    css`
      transition: max-height ${props.theme.transitions.transitionMD} ease-in-out;
      max-height: ${props.$isActive ? '1000px' : '0'};
      overflow: hidden;
    `}
`;

export const StyledIcon = styled.span<StyledSectionProps>`
  display: inline-flex;
  align-items: center;
  transition: transform ${(props) => props.theme.transitions.transitionMD};
  transform: rotate(${(props) => (props.$isActive ? '180deg' : '0deg')});
`;
