import { useEffect, useCallback, useRef, useState } from 'react';
import { Placement } from '@popperjs/core';
import { TriggerAction } from './types';

export const usePopover = (
  isOpen: boolean,
  onClose: () => void,
  triggerAction: TriggerAction,
  closeOnEscape: boolean,
  closeOnClickOutside: boolean
) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = useState<Placement>('bottom');

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        closeOnClickOutside &&
        popoverRef.current &&
        triggerRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    },
    [closeOnClickOutside, onClose]
  );

  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === 'Escape') {
        onClose();
      }
    },
    [closeOnEscape, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, handleClickOutside, handleEscapeKey]);

  return {
    popoverRef,
    triggerRef,
    currentPosition,
    setCurrentPosition,
  };
};
