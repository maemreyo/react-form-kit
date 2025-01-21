import { useCallback, useMemo } from 'react';
import { ErrorType } from './types';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

export const useErrorIcon = (type: ErrorType) => {
  return useMemo(() => {
    switch (type) {
      case 'warning':
        return AlertTriangle;
      case 'info':
        return Info;
      default:
        return AlertCircle;
    }
  }, [type]);
};

export const useTruncatedMessage = (message: string, maxLength?: number) => {
  return useCallback((message: string, maxLength?: number) => {
    if (!maxLength || message.length <= maxLength) return message;
    return `${message.slice(0, maxLength)}...`;
  }, []);
};
