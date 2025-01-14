import styled from 'styled-components';

export const StyledComboBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px; // Giới hạn chiều rộng tối đa
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: ${(props) => props.theme.space.sm};
  padding-right: 32px; // Thêm padding để tránh text bị che bởi icon clear
  font-size: ${(props) => props.theme.fontSizes.small};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.sm};
  box-sizing: border-box;
  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    outline: none;
  }
`;

export const StyledList = styled.ul`
  position: absolute;
  width: 100%; // Dropdown có cùng chiều rộng với input
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
  box-sizing: border-box; // Đảm bảo padding và border không làm tăng kích thước
`;

export const StyledListItem = styled.li<{ disabled?: boolean }>`
  padding: ${(props) => props.theme.space.sm};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
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
  right: 0px; // Điều chỉnh vị trí icon clear
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
