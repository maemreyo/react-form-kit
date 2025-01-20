import { useState, useCallback, useEffect } from 'react';

export const useAccordion = (
  initialActive: string = '',
  multipleExpand: boolean = false
) => {
  const [activeSections, setActiveSections] = useState<Set<string>>(
    new Set(initialActive ? [initialActive] : [])
  );

  const toggleSection = useCallback(
    (sectionId: string) => {
      setActiveSections((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(sectionId)) {
          newSet.delete(sectionId);
        } else {
          if (!multipleExpand) {
            newSet.clear();
          }
          newSet.add(sectionId);
        }
        return newSet;
      });
    },
    [multipleExpand]
  );

  const isSectionActive = useCallback(
    (sectionId: string) => activeSections.has(sectionId),
    [activeSections]
  );

  return {
    activeSections,
    toggleSection,
    isSectionActive,
  };
};
