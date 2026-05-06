import React from 'react';
import { cn } from '../../lib/utils';

interface SketchfabViewerProps {
  modelId: string;
  className?: string;
  title?: string;
}

export function SketchfabViewer({ modelId, className, title }: SketchfabViewerProps) {
  return (
    <div className={cn("w-full h-full relative bg-positivus-grey/30 overflow-hidden", className)}>
      <iframe
        title={title || "Sketchfab 3D Model"}
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="true"
        src={`https://sketchfab.com/models/${modelId}/embed?autostart=1&autospin=0.2&internal=1&tracking=0&ui_ar=0&ui_infos=0&ui_snapshots=0&ui_stop=0&ui_theatre=1&ui_watermark=0`}
      />
    </div>
  );
}
