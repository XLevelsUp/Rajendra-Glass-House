"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";

interface DemoVideo {
  id: string;
  title: string;
  webm: string;
  mp4: string;
  poster: string;
}

const DEMO_VIDEOS: DemoVideo[] = [
  {
    id: "glass-cutting-operation",
    title: "Glass Cutting Operation",
    webm: "/video/glass-cutting.webm",
    mp4: "/video/glass-cutting.mp4",
    poster: "/video/glass-cutting.webp",
  },
  {
    id: "polishing-glass",
    title: "Glass Polishing",
    webm: "/video/polishing.webm",
    mp4: "/video/polishing.mp4",
    poster: "/video/polishing.webp",
  },
  {
    id: "custom-glass-tracing",
    title: "Custom Glass Tracing",
    webm: "/video/tracing.webm",
    mp4: "/video/tracing.mp4",
    poster: "/video/tracing.webp",
  },
  {
    id: "decorative-glass-making",
    title: "Making of Decorative Glass",
    webm: "/video/decorative-glass.webm",
    mp4: "/video/decorative-glass.mp4",
    poster: "/video/decorative-glass.webp",
  },
  {
    id: "Making of Bend Glass",
    title: "Making of Bend Glass",
    webm: "/video/bend-glass.webm",
    mp4: "/video/bend-glass.mp4",
    poster: "/video/blended-glass.webp",
  },
];

export function ShowroomVideo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeVideo = DEMO_VIDEOS[activeIndex];

  // Auto-play the video when index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((err) => {
        console.log("Autoplay was blocked by browser:", err);
      });
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? DEMO_VIDEOS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === DEMO_VIDEOS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-ink-950 border-t border-b border-white/5 relative overflow-hidden">
      {/* Cinematic radial gold background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle 500px at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 80%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <AnimatedContainer className="max-w-2xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px bg-gold/50" />
            <span className="text-[10px] font-black tracking-[0.35em] uppercase text-gold">
              Technology in Action
            </span>
            <div className="w-8 h-px bg-gold/50" />
          </div>
          <h2 className="font-serif text-[2.5rem] md:text-[3.2rem] text-white font-bold leading-tight tracking-tight">
            How Our Systems Work
          </h2>
        </AnimatedContainer>

        {/* Centered Video Player */}
        <div className="max-w-5xl mx-auto">

          <AnimatedContainer delay={0.1}>
            <div className="relative aspect-[16/9] w-full rounded-[1.5rem] overflow-hidden bg-black shadow-2xl border border-white/10">

              {/* Active Video Player */}
              <video
                ref={videoRef}
                key={activeVideo.id}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                poster={activeVideo.poster}
              >
                <source src={activeVideo.webm} type="video/webm" />
                <source src={activeVideo.mp4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Slider Arrows overlay */}
              <button
                onClick={handlePrev}
                aria-label="Previous video demonstration"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-ink-950 flex items-center justify-center shadow-lg cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next video demonstration"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-ink-950 flex items-center justify-center shadow-lg cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <ChevronRight size={20} />
              </button>

              {/* Mute/Unmute audio trigger */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/10 cursor-pointer transition-colors"
                aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </div>
          </AnimatedContainer>

          {/* Centered Active Video Title */}
          <div className="text-center mt-6 space-y-2">
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gold">
              0{activeIndex + 1} / 0{DEMO_VIDEOS.length}
            </span>
            <h3 className="font-serif text-[1.25rem] md:text-[1.5rem] font-bold text-white tracking-tight leading-snug">
              {activeVideo.title}
            </h3>

            {/* Pagination Bullet Indicators */}
            <div className="flex justify-center gap-2 pt-1">
              {DEMO_VIDEOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to video ${i + 1}`}
                  className={`rounded-full transition-all duration-200 cursor-pointer ${i === activeIndex ? "bg-gold w-6 h-1.5" : "bg-white/20 hover:bg-white/40 w-1.5 h-1.5"
                    }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
