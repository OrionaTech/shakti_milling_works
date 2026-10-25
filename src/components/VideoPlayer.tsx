"use client";

export default function VideoPlayer() {
  return (
    <div className="mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-xl bg-charcoal">
      <video
        className="h-full w-full"
        controls
        playsInline
        preload="metadata"
        poster="/videos/carbide-insert-regrinding-yamunanagar-poster.webp"
        width={1280}
        height={720}
        aria-label="Carbide insert regrinding at Shakti Milling Works in Yamunanagar"
      >
        <source
          src="/videos/carbide-insert-regrinding-yamunanagar.webm"
          type="video/webm"
        />
        <source
          src="/videos/carbide-insert-regrinding-yamunanagar.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML video. Contact Shakti Milling Works to learn about carbide insert regrinding.
      </video>
    </div>
  );
}
