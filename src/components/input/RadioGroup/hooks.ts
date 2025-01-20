import { useState, useCallback } from 'react';

export const useRadioGroup = (
  value?: string,
  defaultValue?: string,
  onChange?: (value: string) => void
) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    value || defaultValue || ''
  );

  const handleChange = useCallback(
    (newValue: string) => {
      if (!value) {
        setSelectedValue(newValue);
      }
      onChange?.(newValue);
    },
    [onChange, value]
  );

  return {
    selectedValue: value || selectedValue,
    handleChange,
  };
};
