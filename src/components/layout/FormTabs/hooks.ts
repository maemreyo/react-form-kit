import { useEffect, useState } from 'react';
import { TabItem } from './types';

export const useActiveTab = (tabs: TabItem[], initialTab?: string | number) => {
  const [activeKey, setActiveKey] = useState<string>(() => {
    if (typeof initialTab === 'number') {
      return tabs[initialTab]?.key || tabs[0]?.key;
    }
    return initialTab || tabs[0]?.key;
  });

  useEffect(() => {
    if (!tabs.some((tab) => tab.key === activeKey)) {
      setActiveKey(tabs[0]?.key);
    }
  }, [tabs, activeKey]);

  return {
    activeKey,
    setActiveKey,
  };
};

export const useBreakpoint = (breakpoints: { [key: string]: number }) => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const breakpoint = Object.entries(breakpoints)
        .reverse()
        .find(([_, value]) => width >= value)?.[0];

      setCurrentBreakpoint(breakpoint);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoints]);

  return currentBreakpoint;
};
