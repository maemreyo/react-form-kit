import React, { forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import { FormAccordionProps } from './types';
import { useAccordion } from './hooks';
import {
  StyledAccordion,
  StyledSection,
  StyledHeader,
  StyledContent,
  StyledIcon,
} from './styled';

export const FormAccordion = forwardRef<HTMLDivElement, FormAccordionProps>(
  (
    {
      sections,
      activeSection = '',
      multipleExpand = false,
      gap = '1rem',
      alignment = 'left',
      icons = {
        expand: '▼',
        collapse: '▼',
      },
      animation = true,
      className,
      style,
      onChange,
    },
    ref
  ) => {
    const { activeSections, toggleSection, isSectionActive } = useAccordion(
      activeSection,
      multipleExpand
    );

    const handleClick = (sectionId: string) => {
      toggleSection(sectionId);
      onChange?.(sectionId);
    };

    return (
      <ThemeProvider theme={theme}>
        <StyledAccordion
          ref={ref}
          className={className}
          style={style}
          $gap={gap}
          $alignment={alignment}
        >
          {sections.map((section) => (
            <StyledSection
              key={section.id}
              $disabled={section.disabled}
              $animation={animation}
            >
              <StyledHeader
                onClick={() => !section.disabled && handleClick(section.id)}
                aria-expanded={isSectionActive(section.id)}
                aria-disabled={section.disabled}
                $disabled={section.disabled}
              >
                <span>
                  {section.icon && <span>{section.icon}</span>}
                  {section.title}
                </span>
                <StyledIcon $isActive={isSectionActive(section.id)}>
                  {isSectionActive(section.id) ? icons.collapse : icons.expand}
                </StyledIcon>
              </StyledHeader>
              {(animation || isSectionActive(section.id)) && (
                <StyledContent
                  $isActive={isSectionActive(section.id)}
                  $animation={animation}
                  role="region"
                  aria-labelledby={section.id}
                >
                  {section.content}
                </StyledContent>
              )}
            </StyledSection>
          ))}
        </StyledAccordion>
      </ThemeProvider>
    );
  }
);

FormAccordion.displayName = 'FormAccordion';
