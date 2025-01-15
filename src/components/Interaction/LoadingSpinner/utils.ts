import { SpinnerSize, SpinnerSpeed } from './types';

export const getSizeValue = (size: SpinnerSize): number => {
  const sizeMap = {
    small: 16,
    medium: 24,
    large: 32,
  };
  return typeof size === 'number' ? size : sizeMap[size];
};

export const getSpeedValue = (speed: SpinnerSpeed): number => {
  const speedMap = {
    slow: 1000,
    normal: 750,
    fast: 500,
  };
  return typeof speed === 'number' ? speed : speedMap[speed];
};

export const getBlurValue = (
  blur: 'none' | 'small' | 'medium' | 'large'
): string => {
  const blurMap = {
    none: '0px',
    small: '2px',
    medium: '4px',
    large: '8px',
  };
  return blurMap[blur];
};
