"use client"

import GradientIcon from "@/utils/gradient-icon";
import { FaCirclePlay } from "react-icons/fa6";
import MarqueeText from "../marquee-text";
import { playerContext } from "@/contexts/player-context";
import { useContext } from "react";
import { formatTrackDuration } from '@/utils/time';
export default function TrackItem({ track }) {
  const { setShowPlayer, setCurrentTrack } = useContext(playerContext)
  function clickHandler() {
    setShowPlayer(true);
    setCurrentTrack(track);
  }
  return (
    <article className="flex items-center justify-between dark:text-white">
      <button className="rounded-full flex" onClick={clickHandler}>
        <GradientIcon>
          <FaCirclePlay size={"1.75rem"} />
        </GradientIcon>
      </button>
      <button className="flex items-center gap-2 w-full" >
        <div className="flex flex-col">
          <MarqueeText name={track.name} className="font-bold" />
          <MarqueeText name={track.artists.map(artist => artist.name).join(', ')} className="font-light text-xs" />
        </div>
        <span className="font-light text-xs">{formatTrackDuration(track.duration_ms)}</span>
      </button>
    </article>
  )
}