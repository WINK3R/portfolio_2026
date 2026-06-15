"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

type ProjectScreenshotsMarqueeProps = {
  projectTitle: string;
  screenshots: string[];
  display?: "desktop" | "phone";
  placeholderCount: number;
};

type ProjectScreenshotProps = {
  src: string;
  alt: string;
  display: "desktop" | "phone";
  onOpen: () => void;
};

function ScreenPlaceholder() {
  return (
    <div className="h-[150px] w-[230px] shrink-0 rounded-[20px] bg-[#d9d9d9] sm:h-[169px] sm:w-[340px] lg:w-[420px]" />
  );
}

const screenshotClasses = {
  desktop: {
    frame: "h-[190px] w-[292px] sm:h-[260px] sm:w-[400px]",
    sizes: "(min-width: 640px) 400px, 292px",
  },
  phone: {
    frame: "h-[320px] w-[148px] sm:h-[390px] sm:w-[180px]",
    sizes: "(min-width: 640px) 180px, 148px",
  },
} as const;

function ProjectScreenshot({
  src,
  alt,
  display,
  onOpen,
}: Readonly<ProjectScreenshotProps>) {
  const dimensions = screenshotClasses[display];

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`relative ${dimensions.frame} shrink-0 overflow-hidden rounded-md bg-neutral-100 text-left ring-1 ring-black/8 transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black`}
      aria-label={`Ouvrir ${alt} en plein écran`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={dimensions.sizes}
        className="object-cover"
      />
    </button>
  );
}

export function ProjectScreenshotsMarquee({
  projectTitle,
  screenshots,
  display = "desktop",
  placeholderCount,
}: Readonly<ProjectScreenshotsMarqueeProps>) {
  const [activeScreenshot, setActiveScreenshot] = useState<string | null>(null);
  const placeholders = Array.from({ length: placeholderCount }, (_, index) => index);
  const splitIndex = Math.ceil(screenshots.length / 2);
  const firstScreenshotRow = screenshots.slice(0, splitIndex);
  const secondScreenshotRow = screenshots.slice(splitIndex);

  useEffect(() => {
    if (!activeScreenshot) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveScreenshot(null);
      }
    }

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeScreenshot]);

  return (
    <>
      <div className="overflow-hidden py-6 sm:py-8">
        <Marquee className="p-0 [--duration:34s]" repeat={2} pauseOnHover>
          {firstScreenshotRow.length > 0
            ? firstScreenshotRow.map((screenshot, index) => (
                <ProjectScreenshot
                  key={`row-1-${screenshot}`}
                  src={screenshot}
                  alt={`capture d'écran ${index + 1} du projet ${projectTitle}`}
                  display={display}
                  onOpen={() => setActiveScreenshot(screenshot)}
                />
              ))
            : placeholders.map((item) => (
                <ScreenPlaceholder key={`row-1-${item}`} />
              ))}
        </Marquee>
        <Marquee className="mt-4 p-0 [--duration:34s]" repeat={2} reverse pauseOnHover>
          {secondScreenshotRow.length > 0
            ? secondScreenshotRow.map((screenshot, index) => (
                <ProjectScreenshot
                  key={`row-2-${screenshot}`}
                  src={screenshot}
                  alt={`capture d'écran ${index + firstScreenshotRow.length + 1} du projet ${projectTitle}`}
                  display={display}
                  onOpen={() => setActiveScreenshot(screenshot)}
                />
              ))
            : placeholders.map((item) => (
                <ScreenPlaceholder key={`row-2-${item}`} />
              ))}
        </Marquee>
      </div>

      {activeScreenshot ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Preview plein écran"
          onClick={() => setActiveScreenshot(null)}
        >
          <button
            type="button"
            onClick={() => setActiveScreenshot(null)}
            className="absolute right-4 top-4 z-10 flex size-12 items-center justify-center rounded-full bg-white text-black shadow-2xl transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            aria-label="Fermer la preview"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
          <div
            className="relative h-full max-h-[88vh] w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeScreenshot}
              alt={`Capture d'écran du projet ${projectTitle}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
