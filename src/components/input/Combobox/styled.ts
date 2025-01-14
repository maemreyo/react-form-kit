import styled from 'styled-components';

export const StyledComboBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${(props) => props.theme.space.xs};
  padding: ${(props) => props.theme.space.xs} ${(props) => props.theme.space.md};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.sm};
  background-color: ${(props) => props.theme.colors.white};
  min-height: 40px; // Chiều cao tối thiểu
`;

export const StyledInput = styled.textarea`
  flex: 1;
  min-width: 50px; // Chiều rộng tối thiểu
  padding: ${(props) => props.theme.space.xs};
  font-size: ${(props) => props.theme.fontSizes.small};
  border: none;
  outline: none;
  resize: none; // Tắt khả năng resize thủ công
  background: transparent;
  &::placeholder {
    color: ${(props) => props.theme.colors['text-muted']};
  }
`;

export const StyledTag = styled.span`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.space.xs};
  background-color: ${(props) => props.theme.colors['primary-100']};
  border-radius: ${(props) => props.theme.radius.sm};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const StyledTagRemoveButton = styled.button`
  margin-left: ${(props) => props.theme.space.xs};
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors['text-muted']};
  &:hover {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const StyledList = styled.ul`
  position: absolute;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  margin-top: ${(props) => props.theme.space.xs};
  padding: 0;
  list-style: none;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.sm};
  box-shadow: ${(props) => props.theme.shadows.sm};
  z-index: 10;
`;

export const StyledListItem = styled.li<{ disabled?: boolean }>`
  padding: ${(props) => props.theme.space.sm};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) =>
    props.disabled ? props.theme.colors['light-100'] : 'transparent'};
  color: ${(props) =>
    props.disabled
      ? props.theme.colors['text-muted']
      : props.theme.colors.text};
  &:hover {
    background-color: ${(props) =>
      props.disabled ? 'transparent' : props.theme.colors['primary-100']};
  }
`;

export const StyledLoadingIndicator = styled.div`
  padding: ${(props) => props.theme.space.sm};
  text-align: center;
  color: ${(props) => props.theme.colors['text-muted']};
`;

export const StyledErrorMessage = styled.div`
  padding: ${(props) => props.theme.space.sm};
  color: ${(props) => props.theme.colors.danger};
`;

export const StyledClearButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors['text-muted']};
  &:hover {
    color: ${(props) => props.theme.colors.text};
  }
`;
