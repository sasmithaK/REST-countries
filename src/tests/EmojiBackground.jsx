import React from "react";

export default function EmojiBackground() {
  // pick from a few “world” emojis
  const emojis = ["🌍", "🌎", "🌏", "🗺️", "🧭"];

  // render a bunch of randomly‑positioned, semi‑transparent spans
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100"
      style={{ pointerEvents: "none", zIndex: 0 }}
    >
      {Array.from({ length: 100 }).map((_, i) => {
        const size = `${Math.random() * 2 + 1}rem`;
        return (
          <span
            key={i}
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: size,
              opacity: 0.3,
            }}
          >
            {emojis[Math.floor(Math.random() * emojis.length)]}
          </span>
        );
      })}
    </div>
  );
}
