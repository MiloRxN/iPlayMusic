import Heading from "@/components/typography/heading"
import Image from "next/image"
import Link from "next/link"

export default function FeaturedCard({ album }) {

  return (
    <Link href={`/album/${album.id}`}>
      <article className="relative rounded-lg overflow-hidden shadow-md h-100">
        <Image unoptimized src={album.images[0].url} width={album.images[0].width} height={album.images[0].height} alt="" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 py-10 flex flex-col gap-2">
          <Heading level={3} >{album.name}</Heading>
          <p className="text-white capitalize font-light text-xs">{album.album_type}</p>
        </div>
      </article>
    </Link>
  )
}