"use client";

import { useEffect, useState } from "react";

export default function MusicBar() {
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const audio = document.getElementById("bg-music") as HTMLAudioElement;
    if (!audio) return;

    audio.volume = volume;

    const saved = localStorage.getItem("music-playing");
    if (saved === "true") {
      audio.play().catch(() => {});
    }

    const onPlay = () => {
      setPlaying(true);
      setVisible(true);
      localStorage.setItem("music-playing", "true");
    };

    const onPause = () => {
      setPlaying(false);
      setVisible(false);
      localStorage.setItem("music-playing", "false");
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, [volume]);

  const toggleMusic = () => {
    const audio = document.getElementById("bg-music") as HTMLAudioElement;
    if (!audio) return;
    audio.paused ? audio.play() : audio.pause();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "16px",
        left: "16px",
        height: "40px",
        padding: "0 14px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        backdropFilter: "blur(14px)",
        background: "rgba(15,15,15,0.6)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "999px",
        transform: visible ? "translateX(0)" : "translateX(-130%)",
        transition: "transform 0.45s cubic-bezier(.4,0,.2,1)",
        zIndex: 9999,
        color: "#1DB954",
        fontSize: "12px",
      }}
    >
      {/* Waveform */}
      <div style={{ display: "flex", gap: "3px" }}>
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            style={{
              width: "3px",
              height: playing ? "14px" : "6px",
              background: "#1DB954",
              animation: playing
                ? `wave 0.${i + 3}s infinite ease-in-out`
                : "none",
            }}
          />
        ))}
      </div>

      {/* Track Info */}
      <div style={{ whiteSpace: "nowrap" }}>
        <strong>Background Vibes</strong>
      </div>

      {/* Play / Pause */}
      <button
        onClick={toggleMusic}
        style={{
          background: "none",
          border: "none",
          color: "#1DB954",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        {playing ? "❚❚" : "▶"}
      </button>

      {/* Volume */}
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        style={{ width: "60px" }}
      />

      <style jsx>{`
        @keyframes wave {
          0% {
            height: 6px;
          }
          50% {
            height: 16px;
          }
          100% {
            height: 6px;
          }
        }
      `}</style>
    </div>
  );
}