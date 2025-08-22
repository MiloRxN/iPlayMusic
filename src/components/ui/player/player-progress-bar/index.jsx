import { formatTime } from '@/utils/time';

export default function PlayerProgress({ timing, isLoaded, localPosition, onSeek }) {
  return (
    <div className="flex items-center gap-1">
      <input
        type="range"
        min="0"   
        max={timing.duration || 0}
        value={localPosition}
        onChange={onSeek}
        className="w-full h-1 accent-white"
        disabled={!isLoaded}
      />
        <span className='text-xs text-white opacity-75'>{formatTime(timing.duration - localPosition)}</span>
    </div>
  );
}