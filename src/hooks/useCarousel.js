import { useState, useCallback } from 'react';

export function useCarousel(itemsLength) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % itemsLength);
  }, [itemsLength]);

  const previous = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + itemsLength) % itemsLength);
  }, [itemsLength]);

  const goTo = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  return {
    currentIndex,
    next,
    previous,
    goTo,
  };
}
