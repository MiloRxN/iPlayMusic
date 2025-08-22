// import LoginForm from "@/components/auth/login-form";
// import SpotifyLogin from "@/components/auth/spotify-login";
import Heading from "@/components/typography/heading";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";

export default function LoginPage(){
  return (
    <>
    <Heading level={3}>
      Login
    </Heading>

      <Link href={
        `https://accounts.spotify.com/authorize?`
        + `response_type=code`
        + `&client_id=${process.env.CLIENT_ID}`
        + `&scope=user-read-private%20user-read-email%20playlist-read-collaborative`
        + `&redirect_uri=${process.env.CALLBACK_URL}`
      } className="flex gap-2 bg-green-400 w-fit p-2 rounded-full items-center">Login with Spotify <FaSpotify className="relative z-10 text-black" size={25} /></Link>
    </>
  )
}