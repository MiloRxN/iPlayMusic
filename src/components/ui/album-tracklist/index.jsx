'use client'
import Heading from "@/components/typography/heading";
import TrackItem from "../track-item";

export default function AlbumTrackList({ data }) {
  return (
    <>
      <div className="px-5 flex flex-col gap-5 flex-1 min-h-0 overflow-y-auto">
        <ul className="flex flex-col gap-3 pb-20">
          {data.tracks.items.map(track => <li key={track.id}><TrackItem track={track} /></li>)}
        </ul>
      </div>
    </>
  )
}