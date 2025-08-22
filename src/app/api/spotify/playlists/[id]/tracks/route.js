import { cookies } from "next/headers";

export async function GET(request, { params }) {
  try {
    const cookieStore = await cookies();
    const access_token = cookieStore.get("ipm_access_token");
    const { id } = await params;

    if (!access_token) {
      return Response.json({ error: "No access token" }, { status: 401 });
    }

    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${id}/tracks`,
      {
        headers: {
          "Authorization": `Bearer ${access_token.value}`
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Spotify API error: ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);

  } catch (error) {
    console.error('Error fetching playlist tracks:', error);
    return Response.json(
      { error: "Failed to fetch tracks" },
      { status: 500 }
    );
  }
}