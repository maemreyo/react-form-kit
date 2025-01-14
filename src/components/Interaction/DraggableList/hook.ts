import { DragEvent, KeyboardEvent } from 'react';

export const useDragAndDrop = (
  listItems: any[],
  setListItems: (items: any[]) => void,
  onReorder: (items: any[]) => void
) => {
  const handleDragStart = (e: DragEvent<HTMLLIElement>, index: number) => {
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDragOver = (e: DragEvent<HTMLLIElement>, index: number) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLLIElement>, index: number) => {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    const newItems = [...listItems];
    const [draggedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(index, 0, draggedItem);
    setListItems(newItems);
    onReorder(newItems);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLLIElement>, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      // Start drag (simulate drag start)
      e.currentTarget.setAttribute('aria-grabbed', 'true');
    } else if (e.key === 'ArrowUp' && index > 0) {
      // Move focus to previous item
      const prevItem = e.currentTarget.previousElementSibling as HTMLElement;
      prevItem.focus();
    } else if (e.key === 'ArrowDown' && index < listItems.length - 1) {
      // Move focus to next item
      const nextItem = e.currentTarget.nextElementSibling as HTMLElement;
      nextItem.focus();
    }
  };

  return { handleDragStart, handleDragOver, handleDrop, handleKeyDown };
};
