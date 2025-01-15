import styled, { css } from 'styled-components';

interface StyledLabelContainerProps {
  $position: 'top' | 'left';
}

interface StyledLabelProps {
  $disabled?: boolean;
  $position?: 'top' | 'left';
  $fontFamily?: string;
  $fontSize?: string;
  $fontWeight?: string;
  $lineHeight?: string;
  $color?: string;
  $marginBottom?: string;
  $marginRight?: string;
}

export const StyledLabelContainer = styled.div<StyledLabelContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.$position === 'left' ? 'row' : 'column')};
  align-items: ${(props) =>
    props.$position === 'left' ? 'center' : 'flex-start'};
  width: fit-content;
`;

export const StyledLabel = styled.label<StyledLabelProps>`
  font-family: ${(props) =>
    props.$fontFamily || props.theme.typography.primaryFont};
  font-size: ${(props) => props.$fontSize || props.theme.fontSizes.small};
  font-weight: ${(props) =>
    props.$fontWeight || props.theme.fontWeights.medium};
  line-height: ${(props) => props.$lineHeight || '1.5'};
  color: ${(props) =>
    props.$disabled
      ? props.theme.colors['text-muted']
      : props.$color || props.theme.colors.text};
  margin-bottom: ${(props) =>
    props.$position === 'top'
      ? props.$marginBottom || props.theme.space.xs
      : '0'};
  margin-right: ${(props) =>
    props.$position === 'left'
      ? props.$marginRight || props.theme.space.md
      : '0'};
  display: inline-flex;
  align-items: center;
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
  transition: all ${(props) => props.theme.transitions.transitionMD};

  &:hover {
    color: ${(props) =>
      props.$disabled
        ? props.theme.colors['text-muted']
        : props.theme.colors['title-color']};
  }
`;

export const StyledRequired = styled.span`
  color: ${(props) => props.theme.colors.danger};
  margin-left: ${(props) => props.theme.space.xs};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const StyledOptional = styled.span`
  color: ${(props) => props.theme.colors['text-muted']};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  margin-left: ${(props) => props.theme.space.xs};
  font-size: 0.9em;
`;

export const StyledTooltipWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: ${(props) => props.theme.space.xs};
`;
