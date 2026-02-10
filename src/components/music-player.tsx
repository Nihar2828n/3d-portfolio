"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = document.getElementById("bg-music") as HTMLAudioElement;
    if (audioElement) {
      audioElement.volume = 0.7;
    }
  }, []);

  const toggleMusic = () => {
    const audioElement = document.getElementById("bg-music") as HTMLAudioElement;
    
    if (!audioElement) return;

    if (isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
    } else {
      audioElement.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Small Vinyl Disc Button - Top Left */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 left-6 z-50"
        aria-label="Toggle Music"
      >
        {/* Mini Vinyl Disc */}
        <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl border-2 border-white/20 hover:scale-110 transition-all duration-300 ${isPlaying ? 'animate-spin-slow' : ''}`}>
          {/* Grooves */}
          <div className="absolute inset-1 rounded-full border border-white/10"></div>
          <div className="absolute inset-2 rounded-full border border-white/10"></div>
          
          {/* Center with your image */}
          <div className="absolute inset-3 rounded-full bg-cyan-400 overflow-hidden flex items-center justify-center shadow-inner">
            <Image
              src="/images/what-did-i-miss.png"
              alt="Music"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>

          {/* Center hole */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-3 h-3 rounded-full bg-black border border-yellow-400"></div>
          </div>

          {/* Glass effect overlay */}
          <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm pointer-events-none"></div>
        </div>
      </button>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </>
  );
}