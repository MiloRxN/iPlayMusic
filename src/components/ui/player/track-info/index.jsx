'use client';

import Image from 'next/image';

export default function TrackInfo({ track, compact = false }) {
  if (!track) return null;

  if (compact) {
    return (
      <div className="flex items-center gap-3 min-w-0">
        {track.album?.images?.[0] && (
          <Image
            src={track.album.images[0].url}
            alt={track.album.name}
            width={40}
            height={40}
            className="rounded"
          />
        )}
        <div className="min-w-0 flex-1">
          <p className="text-white text-sm font-medium truncate">{track.name}</p>
          <p className="text-gray-300 text-xs truncate">
            {track.artists?.map(artist => artist.name).join(', ')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      {track.album?.images?.[0] && (
        <Image
          src={track.album.images[0].url}
          alt={track.album.name}
          width={60}
          height={60}
          className="rounded mx-auto mb-2"
        />
      )}
      <p className="text-white font-medium text-sm">{track.name}</p>
      <p className="text-gray-300 text-xs">
        {track.artists?.map(artist => artist.name).join(', ')}
      </p>
    </div>
  );
}