import { useCallback } from 'react';

interface UseToggleSwitchProps {
  isOn: boolean;
  onChange?: (checked: boolean) => void;
  disabled: boolean;
}

export const useToggleSwitch = ({
  isOn,
  onChange,
  disabled,
}: UseToggleSwitchProps) => {
  const handleToggle = useCallback(() => {
    if (!disabled && onChange) {
      onChange(!isOn);
    }
  }, [isOn, onChange, disabled]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (disabled) return;

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleToggle();
      }
    },
    [handleToggle, disabled]
  );

  return {
    handleToggle,
    handleKeyDown,
  };
};
