"use client";

import { useState } from "react";
import Image from "next/image";

const HERO_VIDEO_SOURCES = [
  "/videos/VID_20260824_152734422.mp4",
  "/videos/VID_20260824_152751447.mp4",
  "/videos/VID_20260824_152830518.mp4",
  "/videos/VID_20260824_154743759.mp4",
  "/videos/VID_20260824_160230949.mp4",
  "/videos/VID_20260824_161458792.mp4",
];

function shuffleVideos(videos: string[]) {
  const shuffled = [...videos];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

export default function HeroVideo() {
  const [playlist, setPlaylist] = useState(HERO_VIDEO_SOURCES);

  const activeVideo = playlist[0];

  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden rounded-md bg-steelgray">
      <Image
        src="/images/after/endmill-2.1-new.jpg"
        alt="Precision-reground carbide end mill ready for machining"
        fill
        priority
        sizes="(max-width: 767px) 100vw, 360px"
        className="object-cover"
      />
      {activeVideo ? (
        <video
          key={activeVideo}
          src={activeVideo}
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster="/images/after/endmill-2.1-new.jpg"
          onEnded={(event) => {
            const [currentVideo, ...remainingVideos] = playlist;
            if (remainingVideos.length === 0) {
              event.currentTarget.currentTime = 0;
              void event.currentTarget.play();
              return;
            }
            setPlaylist([
              ...shuffleVideos(remainingVideos),
              currentVideo,
            ]);
          }}
          onError={() => setPlaylist((current) => current.slice(1))}
          className="absolute inset-0 h-full w-full object-cover"
        >
          Your browser does not support embedded video.
        </video>
      ) : null}
    </div>
  );
}