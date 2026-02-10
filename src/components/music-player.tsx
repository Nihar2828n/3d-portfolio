"use client";

import { useEffect } from "react";

export default function MusicPlayer() {
  useEffect(() => {
    const audioElement = document.getElementById("bg-music") as HTMLAudioElement;
    
    if (audioElement) {
      // Set volume to 20%
      audioElement.volume = 0.2;
      
      // Try to autoplay
      const playAudio = async () => {
        try {
          await audioElement.play();
        } catch (error) {
          console.log("Autoplay blocked by browser");
        }
      };

      playAudio();
    }
  }, []);

  return null; // No UI, just background music
}