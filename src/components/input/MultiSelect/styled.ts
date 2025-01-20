import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideDown = keyframes`
  from { 
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectButton = styled.button<{ $hasError?: boolean }>`
  width: 100%;
  min-height: 40px;
  padding: ${(props) => props.theme.space.sm};
  border: 1px solid
    ${(props) =>
      props.$hasError ? props.theme.colors.danger : props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  background: ${(props) => props.theme.colors['form-control-bg']};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['primary-100']};
  }
`;

export const Dropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  margin-top: ${(props) => props.theme.space.xs};
  box-shadow: ${(props) => props.theme.shadows.lg};
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  animation: ${(props) =>
    props.$isOpen
      ? css`
          ${slideDown} 0.2s ease-out
        `
      : 'none'};
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: ${(props) => props.theme.space.sm};
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.small};

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 300px;
  overflow-y: auto;
`;

export const OptionItem = styled.li<{ $isSelected: boolean }>`
  padding: ${(props) => props.theme.space.sm};
  cursor: pointer;
  background: ${(props) =>
    props.$isSelected ? props.theme.colors['primary-100'] : 'transparent'};

  &:hover {
    background: ${(props) => props.theme.colors['light-300']};
  }
`;

export const GroupLabel = styled.div`
  padding: ${(props) => props.theme.space.sm};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors['text-muted']};
  background: ${(props) => props.theme.colors['light-100']};
`;

export const SelectedChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.space.xs};
`;

export const Chip = styled.span`
  background: ${(props) => props.theme.colors['primary-100']};
  padding: ${(props) => `${props.theme.space.xs} ${props.theme.space.sm}`};
  border-radius: ${(props) => props.theme.radius.pill};
  font-size: ${(props) => props.theme.fontSizes['12']};
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.theme.space.xs};
`;

export const ChipRemove = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes['12']};

  &:hover {
    color: ${(props) => props.theme.colors.danger};
  }
`;
