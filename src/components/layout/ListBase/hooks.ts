import { useMemo, useState, useCallback } from 'react';

export const useListData = <T>(
  items: T[],
  sortBy?: string | ((a: T, b: T) => number),
  filterBy?: (item: T) => boolean,
  groupBy?: string | ((item: T) => string),
  sortDirection: 'asc' | 'desc' = 'asc'
) => {
  const sortedAndFilteredItems = useMemo(() => {
    let result = [...items];

    // Apply filtering
    if (filterBy) {
      result = result.filter(filterBy);
    }

    // Apply sorting
    if (sortBy) {
      result.sort((a, b) => {
        let compareResult;
        if (typeof sortBy === 'function') {
          compareResult = sortBy(a, b);
        } else {
          // @ts-ignore
          compareResult = String(a[sortBy]).localeCompare(String(b[sortBy]));
        }
        return sortDirection === 'asc' ? compareResult : -compareResult;
      });
    }

    return result;
  }, [items, sortBy, filterBy, sortDirection]);

  const groupedItems = useMemo(() => {
    if (!groupBy) return null;

    return sortedAndFilteredItems.reduce(
      (acc, item) => {
        const groupKey =
          // @ts-ignore
          typeof groupBy === 'function' ? groupBy(item) : item[groupBy];
        if (!acc[groupKey]) acc[groupKey] = [];
        acc[groupKey].push(item);
        return acc;
      },
      {} as Record<string, T[]>
    );
  }, [sortedAndFilteredItems, groupBy]);

  return {
    processedItems: sortedAndFilteredItems,
    groupedItems,
  };
};
