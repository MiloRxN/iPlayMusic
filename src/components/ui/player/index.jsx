'use client';

import { playerContext } from "@/contexts/player-context";
import { useContext } from "react";
import { useSpotifyPlayer } from "@/hooks/useSpotifyPlayer";
import PlaybackControls from "./playback-controls";
import PlayerProgress from "./player-progress-bar";
import TrackInfo from "./track-info";

export default function Player() {
  const { showPlayer, currentTrack } = useContext(playerContext);

  const {
    controlRef,
    controller,
    isPlaying,
    isLoaded,
    timing,
    localPosition,
    seek,
    togglePlayback,
    handlePrevious,
    handleNext
  } = useSpotifyPlayer(currentTrack);

  if (!showPlayer || !currentTrack) return null;

  return (
    <section className="bg-gradient-to-br from-gradientstart to-gradientend w-[90%] h-auto min-h-24 z-100 fixed bottom-20 mx-[5%] rounded-md p-4">
      {/* Hidden Spotify iframe */}
      <div id="embed-iframe" ref={controlRef} className="hidden"></div>
      <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <TrackInfo track={currentTrack} compact />

          <PlaybackControls
            isPlaying={isPlaying}
            isLoaded={isLoaded}
            onTogglePlay={togglePlayback}
            onPrevious={handlePrevious}
            onNext={handleNext}
            showSkipButtons={false}
          />
        </div>
        
        <PlayerProgress
          timing={timing}
          isLoaded={isLoaded}
          localPosition={localPosition}
          onSeek={seek}
        />
      </div>
    </section>
  );
}