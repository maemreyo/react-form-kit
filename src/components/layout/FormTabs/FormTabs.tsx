import React, { useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import {
  StyledTabsContainer,
  StyledTabList,
  StyledTab,
  StyledTabPanel,
} from './styled';
import { FormTabsProps, TabItem } from './types';
import { useActiveTab } from './hooks';

export const FormTabs: React.FC<FormTabsProps> = ({
  tabs,
  activeTab,
  onChange,
  breakpoints,
  gap = '1rem',
  columns = 1,
  alignItems = 'stretch',
  justifyContent = 'start',
  variant = 'underline',
  position = 'top',
  lazyLoad = true,
  animated = false,
  className,
  style,
}) => {
  const { activeKey, setActiveKey } = useActiveTab(tabs, activeTab);

  const handleTabChange = useCallback(
    (key: string) => {
      setActiveKey(key);
      onChange?.(key);
    },
    [onChange, setActiveKey]
  );

  const renderTab = (tab: TabItem) => (
    <StyledTab
      key={tab.key}
      onClick={() => !tab.disabled && handleTabChange(tab.key)}
      $active={activeKey === tab.key}
      $variant={variant}
      $disabled={tab.disabled}
      disabled={tab.disabled}
      role="tab"
      aria-selected={activeKey === tab.key}
      aria-controls={`panel-${tab.key}`}
      id={`tab-${tab.key}`}
    >
      {tab.icon}
      {tab.label}
    </StyledTab>
  );

  const renderPanel = (tab: TabItem) => {
    const isActive = activeKey === tab.key;

    if (lazyLoad && !isActive) {
      return null;
    }

    return (
      <StyledTabPanel
        key={tab.key}
        $active={isActive}
        $animated={animated}
        role="tabpanel"
        aria-labelledby={`tab-${tab.key}`}
        id={`panel-${tab.key}`}
      >
        {tab.content}
      </StyledTabPanel>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledTabsContainer
        className={className}
        style={style}
        $position={position}
        $variant={variant}
        $columns={columns}
        $gap={gap}
        $alignItems={alignItems}
        $justifyContent={justifyContent}
        role="tablist"
      >
        <StyledTabList
          $position={position}
          $variant={variant}
          $columns={columns}
        >
          {tabs.map(renderTab)}
        </StyledTabList>
        {tabs.map(renderPanel)}
      </StyledTabsContainer>
    </ThemeProvider>
  );
};

FormTabs.displayName = 'FormTabs';
