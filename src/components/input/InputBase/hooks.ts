import { useCallback, useRef, useState } from 'react';
import debounce from 'lodash/debounce';
import { ValidationRule } from './types';

export const useInputValidation = (
  validationRules?: ValidationRule[],
  validationTiming: 'onBlur' | 'onChange' = 'onBlur'
) => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const validate = useCallback(
    async (value: string) => {
      if (!validationRules?.length) return true;

      for (const rule of validationRules) {
        try {
          const isValid = await rule.test(value);
          if (!isValid) {
            setError(rule.message);
            setSuccess(false);
            return false;
          }
        } catch (err) {
          setError('Validation failed');
          setSuccess(false);
          return false;
        }
      }

      setError(null);
      setSuccess(true);
      return true;
    },
    [validationRules]
  );

  const debouncedValidate = useRef(debounce(validate, 300)).current;

  return {
    validate: validationTiming === 'onBlur' ? validate : debouncedValidate,
    error,
    success,
    setError,
    setSuccess,
  };
};
