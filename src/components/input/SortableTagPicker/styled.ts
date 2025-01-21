import styled, { css } from 'styled-components';
import {
  StyledContainerProps,
  StyledInputWrapperProps,
  StyledTagListProps,
  StyledTagItemProps,
} from './types';

export const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: ${(props) => props.theme.typography.primaryFont};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.$disabled ? 'none' : 'auto')};
`;

export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  min-height: 38px;
  padding: 4px 8px;
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  transition: all 0.2s ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}20;
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.disabled};
      cursor: not-allowed;
    `}
`;

export const StyledInputContainer = styled.div`
  flex: 1;
  min-width: 120px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
  padding: 4px;

  &:disabled {
    cursor: not-allowed;
    background-color: transparent;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const StyledTagList = styled.div<StyledTagListProps>`
  margin-top: 8px;
  padding: 8px;
  border: 1px dashed
    ${({ theme, $isDragging }) =>
      $isDragging ? theme.colors.primary : theme.colors.border};
  border-radius: 4px;
  background-color: ${({ theme, $isDragging }) =>
    $isDragging ? theme.colors.primary50 + '30' : 'transparent'};
  min-height: 42px;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === 'vertical' ? 'column' : 'row'};
  flex-wrap: ${({ $direction }) =>
    $direction === 'vertical' ? 'nowrap' : 'wrap'};
  gap: 8px;
  align-items: ${({ $direction }) =>
    $direction === 'vertical' ? 'stretch' : 'center'};
`;

export const StyledTagItem = styled.div<StyledTagItemProps>`
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding: 6px 12px;
  background-color: ${({ theme, $isDragging, $disabled }) =>
    $disabled
      ? theme.colors.disabled
      : $isDragging
        ? theme.colors.primary100
        : theme.colors.primary50};
  border-radius: 16px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'grab')};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  user-select: none;
  border: 1px solid
    ${({ theme, $disabled }) =>
      $disabled ? theme.colors.border : theme.colors.primary};
  transition: all 0.2s ease;
  width: ${({ theme }) => (theme.direction === 'vertical' ? '100%' : 'auto')};

  &:hover {
    background-color: ${({ theme, $disabled }) =>
      $disabled ? theme.colors.disabled : theme.colors.primary100};
  }
`;

export const StyledPill = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;

export const StyledRemoveButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  margin-left: 2px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary200};
    color: ${({ theme }) => theme.colors.error};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary300};
  }
`;

export const StyledDropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  z-index: 1000;
  margin-top: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  min-width: 200px;
`;

export const StyledOption = styled.div<{
  $isHighlighted: boolean;
  $isSelected: boolean;
}>`
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${({ theme, $isHighlighted, $isSelected }) =>
    $isHighlighted
      ? theme.colors.primary100
      : $isSelected
        ? theme.colors.primary50
        : 'transparent'};
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary100};
  }
`;

export const StyledNoOptions = styled.div`
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.placeholder};
  text-align: center;
`;

export const StyledError = styled.div`
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
`;
