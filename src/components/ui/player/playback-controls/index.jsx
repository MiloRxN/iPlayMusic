'use client';

import { FaStepBackward, FaStepForward } from "react-icons/fa";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";


export default function PlaybackControls({ 
  isPlaying, 
  isLoaded, 
  onTogglePlay, 
  onPrevious, 
  onNext,
  showSkipButtons = true 
}) {
  return (
    <div className="flex items-center justify-center gap-4">
      {showSkipButtons && (
        <button 
          onClick={onPrevious}
          disabled={!isLoaded}
          className="text-white hover:scale-110 transition-transform disabled:opacity-50"
        >
          <FaStepBackward size="1.25rem" />
        </button>
      )}
      
      <button 
        onClick={onTogglePlay} 
        disabled={!isLoaded}
        className="text-white hover:scale-110 transition-transform disabled:opacity-50"
      >
        {isPlaying ? (
          <FaCirclePause size="2rem" />
        ) : (
          <FaCirclePlay size="2rem" />
        )}
      </button>

      {showSkipButtons && (
        <button 
          onClick={onNext}
          disabled={!isLoaded}
          className="text-white hover:scale-110 transition-transform disabled:opacity-50"
        >
          <FaStepForward size="1.25rem" />
        </button>
      )}
    </div>
  );
}