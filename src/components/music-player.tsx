"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const audioElement = document.getElementById("bg-music") as HTMLAudioElement;
    if (audioElement) {
      audioElement.volume = 0.7; // 70% volume
    }
  }, []);

  const handleStartMusic = () => {
    const audioElement = document.getElementById("bg-music") as HTMLAudioElement;
    
    if (audioElement) {
      audioElement.play();
      setIsPlaying(true);
      setShowPopup(false);
      setIsAnimating(true);

      // After 4 seconds, show floating bubble
      setTimeout(() => {
        setIsAnimating(false);
        setShowFloating(true);

        // After 7 more seconds, hide floating bubble
        setTimeout(() => {
          setShowFloating(false);
        }, 7000);
      }, 4000);
    }
  };

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
      {/* Initial Popup - Your Image */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div 
            onClick={handleStartMusic}
            className="relative cursor-pointer group"
          >
            {/* Your Image */}
            <div className="relative w-[400px] h-[400px] transform group-hover:scale-105 transition-all duration-300 animate-pulse-slow">
              <Image
                src="/images/what-did-i-miss.png"
                alt="What did I miss?"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Click hint */}
            <p className="text-white text-center mt-4 text-lg font-semibold animate-bounce">
              👆 Click to start music
            </p>
          </div>
        </div>
      )}

      {/* Big Rotating Disc Animation (4 seconds) */}
      {isAnimating && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
          <div className="relative">
            {/* Rotating Vinyl Disc */}
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 animate-spin-slow shadow-2xl">
              {/* Center hole */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-yellow-400 border-4 border-yellow-200 shadow-inner"></div>
              </div>
              {/* Grooves */}
              <div className="absolute inset-6 rounded-full border-2 border-white/30"></div>
              <div className="absolute inset-12 rounded-full border-2 border-white/30"></div>
              <div className="absolute inset-16 rounded-full border-2 border-white/30"></div>
              <div className="absolute inset-20 rounded-full border-2 border-white/30"></div>
              <div className="absolute inset-24 rounded-full border-2 border-white/30"></div>
            </div>

            {/* Pulsing glow effect */}
            <div className="absolute inset-0 rounded-full bg-pink-500/40 blur-3xl animate-pulse"></div>
            
            {/* Sparkle effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl animate-spin-slow">✨</div>
            </div>
          </div>
        </div>
      )}

      {/* Small Floating Bubble (7 seconds) */}
      {showFloating && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-float"
          aria-label="Toggle Music"
        >
          {isPlaying ? (
            <svg className="w-7 h-7 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      )}

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
          animation: spin-slow 3s linear infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-5px) translateX(-5px);
          }
          75% {
            transform: translateY(-15px) translateX(3px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}