import Image from 'next/image';
import Heading from '@/components/typography/heading';

export default function PlaylistCard({ playlist, isCenter, onClick }) {
  const scale = isCenter ? 1 : 0.8;
  const opacity = isCenter ? 1 : 0.7;
  const translateY = isCenter ? 0 : -20;

  return (
    <article
      className="flex-shrink-0 flex flex-col text-center transition-all duration-500 ease-out cursor-pointer"
      style={{
        transform: `scale(${scale}) translateY(${translateY}px)`,
        opacity: opacity,
      }}
      onClick={onClick}
    >
      <Image
        className="mb-4 rounded-lg transition-all duration-500"
        src={playlist?.images?.[0]?.url || '/placeholder-image.png'}
        width={160}
        height={160}
        alt={`${playlist.name} playlist cover`}
      />

      {isCenter && (
        <Heading level={2}>
          {playlist.name}
        </Heading>
      )}
    </article>
  );6
}