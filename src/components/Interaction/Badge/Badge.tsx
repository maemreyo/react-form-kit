import React, { forwardRef, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import { BadgeProps } from './types';
import { StyledBadge, StyledBadgeContent, StyledBadgeWrapper } from './styled';
import { Tooltip } from '../Tooltip';

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      content = '',
      type = 'default',
      size = 'medium',
      shape = 'rounded',
      color,
      backgroundColor,
      position = 'top-right',
      offsetX = 0,
      offsetY = 0,
      className,
      style,
      ariaLabel,
      isVisible = true,
      isInteractive = false,
      onClick,
      maxCount = 99,
      showZero = false,
      testId,
      tooltip,
      tooltipPosition = 'top',
      animation = 'none',
      animationDuration = 300,
      disablePortal = false,
      ariaLabelledby,
      ariaDescribedby,
      role = 'status',
      zIndex = 1000,
    },
    ref
  ) => {
    const displayContent = useMemo(() => {
      if (typeof content === 'number' && content > maxCount) {
        return `${maxCount}+`;
      }
      return content;
    }, [content, maxCount]);

    if (!isVisible || (content === 0 && !showZero)) {
      return null;
    }

    const badge = (
      <StyledBadge
        ref={ref}
        className={className}
        style={style}
        $type={type}
        $size={size}
        $shape={shape}
        $color={color}
        $backgroundColor={backgroundColor}
        $position={position}
        $offsetX={offsetX}
        $offsetY={offsetY}
        $isInteractive={isInteractive}
        $animation={animation}
        $animationDuration={animationDuration}
        $zIndex={zIndex}
        onClick={isInteractive ? onClick : undefined}
        role={role}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        data-testid={testId}
      >
        <StyledBadgeContent>{displayContent}</StyledBadgeContent>
      </StyledBadge>
    );

    return (
      <ThemeProvider theme={theme}>
        <StyledBadgeWrapper $disablePortal={disablePortal}>
          {tooltip ? (
            <Tooltip title={tooltip} placement={tooltipPosition}>
              {badge}
            </Tooltip>
          ) : (
            badge
          )}
        </StyledBadgeWrapper>
      </ThemeProvider>
    );
  }
);

Badge.displayName = 'Badge';
