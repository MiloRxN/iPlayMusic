// import { cookies } from "next/headers";
// import PlaylistCarousel from "@/components/ui/playlist-slider";
// export const metadata = {
//   title: "Playlists"
// };
// export default async function PlaylistsPage() {

//   const cookieStore = await cookies();
//   const access_token = cookieStore.get("ipm_access_token");

//   const response = await fetch(`https://api.spotify.com/v1/me/playlists`, {
//     headers: {
//       "Authorization": `Bearer ${access_token.value}`
//     }
//   })
//   const data = await response.json()
//   console.log(data)

//   return (
//     <main className={`bg-[url(/sound-wave.png)] bg-no-repeat`}>
//       <PlaylistCarousel playlists={data?.items || []}  onPlaylistChange={(playlist) => {
//         console.log('Selected playlist from parent:', playlist)
//       }}/>
//     </main>

//   )
// }

import { cookies } from "next/headers";
import PlaylistsPageClient from "@/components/playlists-page-client";

export const metadata = {
  title: "Playlists"
};

export default async function PlaylistsPage() {
  const cookieStore = await cookies();
  const access_token = cookieStore.get("ipm_access_token");

  const response = await fetch(`https://api.spotify.com/v1/me/playlists`, {
    headers: {
      "Authorization": `Bearer ${access_token.value}`
    }
  })
  const data = await response.json()
  console.log(data)

  return <PlaylistsPageClient playlists={data?.items || []} />;
}