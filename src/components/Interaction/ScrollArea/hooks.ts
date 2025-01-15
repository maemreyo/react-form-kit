import { useEffect, useRef, useCallback } from 'react';

export const useScrollPosition = (
  getScrollPosition?: () => { x: number; y: number },
  setScrollPosition?: (position: { x: number; y: number }) => void
) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const updateScrollPosition = useCallback(() => {
    if (scrollRef.current && getScrollPosition) {
      const { scrollLeft, scrollTop } = scrollRef.current;
      getScrollPosition();
    }
  }, [getScrollPosition]);

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      element.addEventListener('scroll', updateScrollPosition);
      return () => {
        element.removeEventListener('scroll', updateScrollPosition);
      };
    }
  }, [updateScrollPosition]);

  return scrollRef;
};

export const useClickOutside = (callback?: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        callback
      ) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return ref;
};
