import { ToggleSwitchSize } from './types';

interface SwitchDimensions {
  $width: number;
  $height: number;
  $thumbSize: number;
  $thumbOffset: number;
}

export const getSwitchDimensions = (
  size: ToggleSwitchSize
): SwitchDimensions => {
  switch (size) {
    case 'small':
      return {
        $width: 36,
        $height: 20,
        $thumbSize: 16,
        $thumbOffset: 2,
      };
    case 'large':
      return {
        $width: 60,
        $height: 32,
        $thumbSize: 28,
        $thumbOffset: 2,
      };
    default: // medium
      return {
        $width: 48,
        $height: 26,
        $thumbSize: 22,
        $thumbOffset: 2,
      };
  }
};
