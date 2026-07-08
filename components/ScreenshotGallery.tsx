"use client";

import Image from "next/image";
import { useState } from "react";

type Screenshot = {
  src: string;
  alt: string;
};

export default function ScreenshotGallery({
  screenshots,
}: {
  screenshots: Screenshot[];
}) {
  const [active, setActive] = useState<Screenshot | null>(null);

  if (screenshots.length === 0) return null;

  return (
    <>
      <div
        className={`grid gap-4 ${
          screenshots.length === 1 ? "grid-cols-1" : "sm:grid-cols-2"
        }`}
      >
        {screenshots.map((shot) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setActive(shot)}
            className="relative aspect-video overflow-hidden rounded-xl border border-border bg-background text-left"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              className="object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
        >
          <div className="relative max-h-full max-w-4xl">
            <Image
              src={active.src}
              alt={active.alt}
              width={1600}
              height={1000}
              className="max-h-[85vh] w-auto rounded-xl border border-border-strong object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
