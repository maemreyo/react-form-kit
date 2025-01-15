import React, { forwardRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import { PopoverProps } from './types';
import { usePopover } from './hooks';
import {
  StyledPopoverContainer,
  StyledOverlay,
  StyledArrow,
  StyledTriggerWrapper,
  StyledCloseButton,
} from './styled';

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      isOpen = false,
      onClose = () => {},
      onOpen = () => {},
      trigger,
      triggerAction = 'click',
      position = 'bottom',
      offsetX = 0,
      offsetY = 0,
      content,
      className,
      style,
      ariaLabel,
      animation = 'fade',
      animationDuration = 300,
      closeOnClickOutside = true,
      closeOnEscape = true,
      arrow = true,
      arrowSize = 8,
      arrowColor = '#ffffff',
      overlay = false,
      overlayColor = 'rgba(0, 0, 0, 0.5)',
      overlayBlur = 'none',
      testId,
      zIndex = 1000,
      maxWidth = '300px',
      maxHeight = 'auto',
      scrollable = false,
      focusTrap = true,
      disablePortal = false,
      onPositionChange,
      role = 'dialog',
      ariaLabelledby,
      ariaDescribedby,
      closeButton = true,
      closeButtonAriaLabel = 'Close',
    },
    ref
  ) => {
    const { popoverRef, triggerRef, currentPosition, setCurrentPosition } =
      usePopover(
        isOpen,
        onClose,
        triggerAction,
        closeOnEscape,
        closeOnClickOutside
      );

    const handleTriggerClick = useCallback(() => {
      if (triggerAction === 'click') {
        isOpen ? onClose() : onOpen();
      }
    }, [isOpen, onClose, onOpen, triggerAction]);

    const handleTriggerMouseEnter = useCallback(() => {
      if (triggerAction === 'hover') {
        onOpen();
      }
    }, [onOpen, triggerAction]);

    const handleTriggerMouseLeave = useCallback(() => {
      if (triggerAction === 'hover') {
        onClose();
      }
    }, [onClose, triggerAction]);

    const handleTriggerFocus = useCallback(() => {
      if (triggerAction === 'focus') {
        onOpen();
      }
    }, [onOpen, triggerAction]);

    const handleTriggerBlur = useCallback(() => {
      if (triggerAction === 'focus') {
        onClose();
      }
    }, [onClose, triggerAction]);

    const popoverContent = (
      <ThemeProvider theme={theme}>
        {overlay && (
          <StyledOverlay
            $overlayColor={overlayColor}
            $overlayBlur={overlayBlur}
            $zIndex={zIndex}
          />
        )}
        <StyledPopoverContainer
          ref={popoverRef}
          className={className}
          style={style}
          $zIndex={zIndex}
          $maxWidth={maxWidth}
          $maxHeight={maxHeight}
          $animation={animation}
          $animationDuration={animationDuration}
          $scrollable={scrollable}
          role={role}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          aria-describedby={ariaDescribedby}
          data-testid={testId}
        >
          {closeButton && (
            <StyledCloseButton
              onClick={onClose}
              aria-label={closeButtonAriaLabel}
            >
              ×
            </StyledCloseButton>
          )}
          {arrow && <StyledArrow $size={arrowSize} $color={arrowColor} />}
          {content}
        </StyledPopoverContainer>
      </ThemeProvider>
    );

    return (
      <>
        <StyledTriggerWrapper
          ref={triggerRef}
          onClick={handleTriggerClick}
          onMouseEnter={handleTriggerMouseEnter}
          onMouseLeave={handleTriggerMouseLeave}
          onFocus={handleTriggerFocus}
          onBlur={handleTriggerBlur}
        >
          {trigger}
        </StyledTriggerWrapper>
        {isOpen &&
          (disablePortal
            ? popoverContent
            : createPortal(popoverContent, document.body))}
      </>
    );
  }
);

Popover.displayName = 'Popover';
