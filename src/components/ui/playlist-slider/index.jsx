'use client';

import { useCallback, useEffect } from 'react';
import PlaylistCard from '../playlist-card';
import { CAROUSEL_CONFIG, CAROUSEL_STYLES } from './constants';
import { useSwipe } from '@/hooks/useSwipe';
import { useCarousel } from '@/hooks/useCarousel';

export default function PlaylistCarousel({ playlists = [], onPlaylistChange }) {
  const { currentIndex, next, previous } = useCarousel(playlists.length);

  // Effect to notify parent component when the current playlist changes
  useEffect(() => {
    if (playlists.length > 0 && onPlaylistChange) {
      const currentPlaylist = playlists[currentIndex];
      onPlaylistChange(currentPlaylist); // callback to parent
    }
  }, [currentIndex, playlists, onPlaylistChange]);


  const handleCardClick = useCallback((offset) => {
    if (offset === -1) previous();
    if (offset === 1) next();
  }, [next, previous]);

  const swipeHandlers = useSwipe({
    onSwipeLeft: next,
    onSwipeRight: previous,
    threshold: CAROUSEL_CONFIG.SWIPE_THRESHOLD,
  });

  const getVisibleItems = useCallback(() => {
    return CAROUSEL_CONFIG.OFFSETS.map((offset) => {
      const index = (currentIndex + offset + playlists.length) % playlists.length;
      return {
        playlist: playlists[index],
        offset,
        isCenter: offset === 0,
        key: `${playlists[index]?.id}-${offset}`,
      };
    });
  }, [currentIndex, playlists]);

  if (!playlists.length) {
    return (
      <div className={CAROUSEL_STYLES.emptyState}>
        No playlists found
      </div>
    );
  }

  const visibleItems = getVisibleItems();

  return (
    <section className={CAROUSEL_STYLES.container}>
      <div
        className={CAROUSEL_STYLES.slider}
        onTouchStart={swipeHandlers.handleTouchStart}
        onTouchMove={swipeHandlers.handleTouchMove}
        onTouchEnd={swipeHandlers.handleTouchEnd}
      >
        {visibleItems.map(({ playlist, offset, isCenter, key }) => (
          <PlaylistCard
            key={key}
            playlist={playlist}
            isCenter={isCenter}
            onClick={() => handleCardClick(offset)}
          />
        ))}
      </div>
    </section>
  );
}