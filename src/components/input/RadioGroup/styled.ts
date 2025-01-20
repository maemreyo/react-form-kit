import styled from 'styled-components';
import { OrientationType, LabelPositionType, SpacingType } from './types';

interface StyledRadioGroupProps {
  $orientation: OrientationType;
  $disabled?: boolean;
  $error?: boolean;
}

interface StyledRadioItemProps {
  $labelPosition: LabelPositionType;
  $spacing: SpacingType;
  $disabled?: boolean;
  $error?: boolean;
}

export const StyledRadioGroup = styled.div<StyledRadioGroupProps>`
  display: flex;
  flex-direction: ${({ $orientation }) =>
    $orientation === 'vertical' ? 'column' : 'row'};
  gap: ${({ theme }) => theme.space.md};
  opacity: ${({ $disabled }) => ($disabled ? '0.5' : '1')};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
`;

export const StyledRadioItem = styled.label<StyledRadioItemProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme, $spacing }) => theme.space[$spacing]};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? '0.5' : '1')};

  input[type='radio'] {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid
      ${({ theme, $error }) =>
        $error ? theme.colors.danger : theme.colors.border};
    border-radius: 50%;
    margin: 0;
    position: relative;

    &:checked {
      border-color: ${({ theme, $error }) =>
        $error ? theme.colors.danger : theme.colors.primary};

      &:after {
        content: '';
        width: 10px;
        height: 10px;
        background: ${({ theme, $error }) =>
          $error ? theme.colors.danger : theme.colors.primary};
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
    }
  }
`;

export const StyledError = styled.div`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-top: ${({ theme }) => theme.space.xs};
`;
