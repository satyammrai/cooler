import React from 'react';
import { cn } from '../../lib/utils';

interface YouTubeEmbedProps {
  videoId: string;
  className?: string;
  title?: string;
}

export function YouTubeEmbed({ videoId, className, title }: YouTubeEmbedProps) {
  return (
    <div className={cn("w-full h-full relative bg-positivus-grey/30 overflow-hidden", className)}>
      <iframe
        title={title || "YouTube Video Loop"}
        className="absolute inset-0 w-full h-full border-0 scale-110"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0`}
        allow="autoplay; fullscreen"
        allowFullScreen
      />
      {/* Overlay to prevent interaction and hide YouTube UI as much as possible */}
      <div className="absolute inset-0 z-10 bg-transparent" />
    </div>
  );
}
