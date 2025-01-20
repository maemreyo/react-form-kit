import styled, { css } from 'styled-components';

interface StyledStepperProps {
  $vertical?: boolean;
  $responsive?: boolean;
}

interface StyledStepProps {
  $active?: boolean;
  $completed?: boolean;
  $disabled?: boolean;
  $vertical?: boolean;
}

interface StyledStepIconProps {
  $active?: boolean;
  $completed?: boolean;
  $disabled?: boolean;
}

interface StyledStepLabelProps {
  $active?: boolean;
  $completed?: boolean;
  $disabled?: boolean;
}

interface StyledConnectorProps {
  $completed?: boolean;
  $vertical?: boolean;
}

interface StyledContentWrapperProps {
  $animation?: boolean;
}

export const StyledStepper = styled.div<StyledStepperProps>`
  display: flex;
  flex-direction: ${(props) => (props.$vertical ? 'row' : 'column')};
  width: 100%;

  ${(props) =>
    props.$responsive &&
    css`
      @media (max-width: ${props.theme.breakpoints.md}) {
        flex-direction: column;
      }
    `}
`;

export const StyledStepContainer = styled.div<{ $vertical?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$vertical ? 'column' : 'row')};
  align-items: ${(props) => (props.$vertical ? 'flex-start' : 'center')};
  justify-content: space-between;
  margin-bottom: ${(props) => (props.$vertical ? '0' : props.theme.space.xl)};
`;

export const StyledStep = styled.div<StyledStepProps>`
  display: flex;
  flex-direction: ${(props) => (props.$vertical ? 'row' : 'column')};
  align-items: center;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  transition: ${(props) => props.theme.transitions.transitionNormal};

  &:hover {
    ${(props) =>
      !props.$disabled &&
      css`
        transform: translateY(-2px);
      `}
  }
`;

export const StyledStepIcon = styled.div<StyledStepIconProps>`
  width: 32px;
  height: 32px;
  border-radius: ${(props) => props.theme.radius.rounded};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => {
    if (props.$completed) return props.theme.colors.success;
    if (props.$active) return props.theme.colors.primary;
    return props.theme.colors.light;
  }};
  color: ${(props) => {
    if (props.$completed || props.$active) return props.theme.colors.white;
    return props.theme.colors.text;
  }};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  transition: ${(props) => props.theme.transitions.transitionNormal};
`;

export const StyledStepLabel = styled.span<StyledStepLabelProps>`
  margin-top: ${(props) => props.theme.space.sm};
  color: ${(props) => {
    if (props.$completed) return props.theme.colors.success;
    if (props.$active) return props.theme.colors.primary;
    if (props.$disabled) return props.theme.colors['text-muted'];
    return props.theme.colors.text;
  }};
  font-weight: ${(props) =>
    props.$active
      ? props.theme.fontWeights.medium
      : props.theme.fontWeights.normal};
  transition: ${(props) => props.theme.transitions.transitionNormal};
`;

export const StyledConnector = styled.div<StyledConnectorProps>`
  flex: 1;
  height: ${(props) => (props.$vertical ? '24px' : '2px')};
  width: ${(props) => (props.$vertical ? '2px' : 'auto')};
  background-color: ${(props) =>
    props.$completed ? props.theme.colors.success : props.theme.colors.light};
  margin: ${(props) =>
    props.$vertical
      ? `0 ${props.theme.space.md}`
      : `0 ${props.theme.space.lg}`};
  transition: ${(props) => props.theme.transitions.transitionNormal};
`;

export const StyledContentWrapper = styled.div<StyledContentWrapperProps>`
  ${(props) =>
    props.$animation &&
    css`
      transition: ${props.theme.transitions.transitionNormal};
    `}
`;

export const StyledStepContent = styled.div`
  padding: ${(props) => props.theme.space.lg};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.radius.lg};
  box-shadow: ${(props) => props.theme.shadows.sm};
`;
