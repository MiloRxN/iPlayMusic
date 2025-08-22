import { useRef } from 'react';

export function useSwipe({ onSwipeLeft, onSwipeRight, threshold = 50 }) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    isDragging.current = false;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;

    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > threshold) {
      onSwipeLeft?.();
    } else if (swipeDistance < -threshold) {
      onSwipeRight?.();
    }
  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}