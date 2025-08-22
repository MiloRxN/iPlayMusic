'use client'

import { useState, useEffect } from 'react';
import PlaylistCarousel from "@/components/ui/playlist-slider";
import AlbumTrackList from "../ui/album-tracklist";

export default function PlaylistsPageClient({ playlists }) {
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePlaylistChange = (playlist) => {
    setCurrentPlaylist(playlist);
  };

  useEffect(() => {
    async function fetchTracks() {
      if (!currentPlaylist?.id) {
        setTracks([]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(`/api/spotify/playlists/${currentPlaylist.id}/tracks`);
        if (response.ok) {
          const data = await response.json();

          // Transform playlist tracks to match album track structure
          const transformedTracks = data.items?.map(item => ({
            ...item.track,
            id: item.track?.id || Math.random().toString()
          })) || [];
          setTracks(transformedTracks);
        } else {
          console.error('Failed to fetch tracks');
          setTracks([]);
        }
      } catch (error) {
        console.error('Error fetching tracks:', error);
        setTracks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, [currentPlaylist]);

  return (
    <main className={`bg-[url(/sound-wave.png)] bg-no-repeat flex flex-col h-screen`}>
      <PlaylistCarousel
        playlists={playlists}
        onPlaylistChange={handlePlaylistChange}
      />

      {currentPlaylist && (
        <>
          {loading ? (
            <div className="text-center py-8">
              Loading tracks...
            </div>
          ) : tracks.length > 0 ? (
            <AlbumTrackList data={{ tracks: { items: tracks } }} />
          ) : (
            <div className="text-center py-8 text-gray-500">
              No tracks found in this playlist
            </div>
          )}
        </>
      )}
    </main>
  );
}