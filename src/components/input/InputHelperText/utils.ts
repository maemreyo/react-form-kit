import { HelperTextType } from './types';

export const truncateText = (text: string, maxLength: number): string => {
  if (!maxLength || text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

export const getHelperTextColor = (type: HelperTextType, theme: any) => {
  switch (type) {
    case 'error':
      return theme.colors.danger;
    case 'warning':
      return theme.colors.warning;
    case 'success':
      return theme.colors.success;
    default:
      return theme.colors.text;
  }
};
