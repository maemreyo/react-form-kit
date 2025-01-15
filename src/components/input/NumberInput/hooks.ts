import { useState, useCallback, useEffect } from 'react';

interface UseNumberInputProps {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  onChange?: (value: number) => void;
  clampValue?: boolean;
}

export const useNumberInput = ({
  value,
  defaultValue = 0,
  min,
  max,
  step = 1,
  precision,
  onChange,
  clampValue = false,
}: UseNumberInputProps) => {
  const [localValue, setLocalValue] = useState<number>(value ?? defaultValue);

  const clamp = useCallback(
    (num: number): number => {
      if (!clampValue) return num;
      if (typeof min === 'number') num = Math.max(min, num);
      if (typeof max === 'number') num = Math.min(max, num);
      return num;
    },
    [clampValue, min, max]
  );

  const format = useCallback(
    (num: number): number => {
      if (typeof precision === 'number') {
        return Number(num.toFixed(precision));
      }
      return num;
    },
    [precision]
  );

  const updateValue = useCallback(
    (newValue: number) => {
      const clampedValue = clamp(newValue);
      const formattedValue = format(clampedValue);
      setLocalValue(formattedValue);
      onChange?.(formattedValue);
    },
    [clamp, format, onChange]
  );

  const increment = useCallback(() => {
    updateValue(localValue + step);
  }, [localValue, step, updateValue]);

  const decrement = useCallback(() => {
    updateValue(localValue - step);
  }, [localValue, step, updateValue]);

  useEffect(() => {
    if (typeof value === 'number') {
      setLocalValue(value);
    }
  }, [value]);

  return {
    value: localValue,
    setValue: updateValue,
    increment,
    decrement,
  };
};
