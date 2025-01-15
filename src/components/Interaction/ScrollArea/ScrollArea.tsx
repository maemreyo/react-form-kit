import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import { StyledScrollArea } from './styled';
import { ScrollAreaProps } from './types';
import { useScrollPosition, useClickOutside } from './hooks';

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  (
    {
      smoothScrolling = true,
      scrollbarStyle,
      overflowX = 'auto',
      overflowY = 'auto',
      getScrollPosition,
      setScrollPosition,
      scrollAnimationDuration = 300,
      scrollAnimationEasing = 'ease-in-out',
      handleClickOutside,
      focusTrap = false,
      zIndex,
      children,
      className,
      style,
      ariaLabel,
      ariaDescribedby,
      ariaInvalid,
      ariaRequired,
      ariaDisabled,
      role,
      tabIndex = 0,
      testId,
    },
    ref
  ) => {
    const scrollRef = useScrollPosition(getScrollPosition, setScrollPosition);
    const clickOutsideRef = useClickOutside(handleClickOutside);
    const combinedRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => combinedRef.current as HTMLDivElement);

    return (
      <ThemeProvider theme={theme}>
        <StyledScrollArea
          ref={(element) => {
            // Combine refs
            combinedRef.current = element;
            if (typeof ref === 'function') {
              ref(element);
            } else if (ref) {
              ref.current = element;
            }
            if (scrollRef) {
              (
                scrollRef as React.MutableRefObject<HTMLDivElement | null>
              ).current = element;
            }
            if (clickOutsideRef) {
              (
                clickOutsideRef as React.MutableRefObject<HTMLDivElement | null>
              ).current = element;
            }
          }}
          className={className}
          style={{ ...style, ...scrollbarStyle }}
          $smoothScrolling={smoothScrolling}
          $overflowX={overflowX}
          $overflowY={overflowY}
          $scrollAnimationDuration={scrollAnimationDuration}
          $scrollAnimationEasing={scrollAnimationEasing}
          $zIndex={zIndex}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedby}
          aria-invalid={ariaInvalid}
          aria-required={ariaRequired}
          aria-disabled={ariaDisabled}
          role={role}
          tabIndex={tabIndex}
          data-testid={testId}
        >
          {children}
        </StyledScrollArea>
      </ThemeProvider>
    );
  }
);

ScrollArea.displayName = 'ScrollArea';
