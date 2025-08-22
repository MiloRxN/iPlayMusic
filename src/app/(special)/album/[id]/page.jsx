import Heading from "@/components/typography/heading";
import AlbumTrackList from "@/components/ui/album-tracklist";
import { cookies } from "next/headers";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const cookieStore = await cookies();

  const access_token = cookieStore.get("ipm_access_token");

  const response = await fetch("https://api.spotify.com/v1/albums/" + id, {
    headers: {
      Authorization: "Bearer " + access_token.value
    }
  });

  const data = await response.json();

  return {
    title: data.name
  }
}

export default async function AlbumDetailsPage({ params }) {
  const { id } = await params;
  const cookieStore = await cookies();
  
  const access_token = cookieStore.get("ipm_access_token");

  const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
    headers: {
      "Authorization": `Bearer ${access_token.value}`
    }
  })

  const data = await response.json();
  console.log(data)
  return (
    <main>
      <div className="flex flex-col h-screen">
        <div className="relative h-75 flex-shrink-0">
          <Image priority src={data.images[0].url} width={data.images[0].width} height={data.images[0].height} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 py-20 px-5">
            <Heading level={2} className={"text-white text-3xl mb-3"}>
              {data.name}
            </Heading>
            <span className="text-white">
              {data?.total_tracks > 1 ? `${data.total_tracks} songs` : '1 song'}
            </span>
          </div>
        </div>
        <Heading level={2} className={"my-5 mx-5"}>All Songs</Heading>
        <AlbumTrackList data={data} />
      </div>
    </main>
  )
}