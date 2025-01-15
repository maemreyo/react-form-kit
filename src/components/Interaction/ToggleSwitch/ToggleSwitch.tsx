import React, { forwardRef, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import {
  StyledToggleContainer,
  StyledToggleSwitch,
  StyledToggleThumb,
  StyledLabelText,
} from './styled';
import { ToggleSwitchProps } from './types';
import { useToggleSwitch } from './hooks';
import { getSwitchDimensions } from './utils';

export const ToggleSwitch = forwardRef<HTMLDivElement, ToggleSwitchProps>(
  (
    {
      isOn = false,
      onChange,
      size = 'medium',
      onColor,
      offColor,
      thumbColor,
      disabled = false,
      className,
      style,
      ariaLabel = 'Toggle Switch',
      onLabel,
      offLabel,
      labelPosition = 'right',
      animation = 'smooth',
      animationDuration = 300,
      testId,
      focusable = true,
      tabIndex = 0,
      id,
      name,
    },
    ref
  ) => {
    const { handleToggle, handleKeyDown } = useToggleSwitch({
      isOn,
      onChange,
      disabled,
    });

    const dimensions = useMemo(() => getSwitchDimensions(size), [size]);

    return (
      <ThemeProvider theme={theme}>
        <StyledToggleContainer
          className={className}
          style={style}
          $labelPosition={labelPosition}
          data-testid={testId}
          ref={ref}
        >
          {(onLabel || offLabel) && labelPosition === 'left' && (
            <StyledLabelText $size={size} $disabled={disabled}>
              {isOn ? onLabel : offLabel}
            </StyledLabelText>
          )}

          <StyledToggleSwitch
            role="switch"
            aria-checked={isOn}
            aria-label={ariaLabel}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            tabIndex={focusable ? tabIndex : -1}
            $isOn={isOn}
            $size={size}
            $disabled={disabled}
            $onColor={onColor}
            $offColor={offColor}
            $animation={animation}
            $animationDuration={animationDuration}
            {...dimensions}
          >
            <StyledToggleThumb
              $isOn={isOn}
              $size={size}
              $thumbColor={thumbColor}
              $animation={animation}
              $animationDuration={animationDuration}
              {...dimensions}
            />
          </StyledToggleSwitch>

          {(onLabel || offLabel) && labelPosition === 'right' && (
            <StyledLabelText $size={size} $disabled={disabled}>
              {isOn ? onLabel : offLabel}
            </StyledLabelText>
          )}
        </StyledToggleContainer>
      </ThemeProvider>
    );
  }
);

ToggleSwitch.displayName = 'ToggleSwitch';
