import FeaturedCard from "@/components/ui/featured-card";
import Heading from "@/components/typography/heading";
import { cookies } from "next/headers";

export const metadata = {
  title: "Featured"
};

export default async function Featured() {

  const cookieStore = await cookies();
  const access_token = cookieStore.get("ipm_access_token");

  const response = await fetch("https://api.spotify.com/v1/browse/new-releases", {
    headers: {
      "Authorization": `Bearer ${access_token.value}`
    }
  })

  const data = await response.json();

  return (
    <>
      <div className="flex flex-col gap-4 h-full">
        {data?.albums?.items.map((album) => (
            <FeaturedCard key={album.id} album={album}/>
          ))}
      </div>
    </>
  );
}
