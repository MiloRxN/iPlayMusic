import Player from "@/components/ui/player";
import "./globals.css";
import PlayerProvider from "@/contexts/player-context";

export const metadata = {
  title: {
    template: "%s | iPlayMusic",
    default: "iPlayMusic"
  },
  description: "A much better music player web-app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-purple">
        <PlayerProvider>
        {children}
        <Player />
        </PlayerProvider>
      </body>
    </html>
  );
}